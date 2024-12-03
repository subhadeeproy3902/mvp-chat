'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { User } from 'stream-chat'
import { useEffect, useState } from 'react'
import { useChatContext } from 'stream-chat-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { NewConversationFormSchema } from '@/lib/schemas'
import { createNewConversationAction } from '@/lib/actions'

import UserSelector from '@/components/user-selector'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Inputs = z.infer<typeof NewConversationFormSchema>

export default function NewConversationForm({
  onSuccess
}: {
  onSuccess: () => void
}) {
  const { client } = useChatContext()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (!client) return

    const getUsers = async () => {
      const response = await client.queryUsers(
        {
          id: { $ne: client.userID as string }
        },
        { name: 1 }
      )

      setUsers(response.users)
    }

    getUsers()
  }, [client])

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewConversationFormSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
      selectedUsers: []
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    if (!client) return

    const result = await createNewConversationAction(data)

    if (result?.error) {
      toast.error(result.error)
      return
    }

    onSuccess()
    toast.success('Channel created successfully!')
  }

  register('selectedUsers')
  const selectedUsers = getValues('selectedUsers')

  function addUser(id: string) {
    const value = [...selectedUsers, id]
    setValue('selectedUsers', value, { shouldValidate: true })
  }

  function removeUser(id: string) {
    const value = selectedUsers.filter(userId => userId !== id)
    setValue('selectedUsers', value, { shouldValidate: true })
  }

  return (
    <form className='grid gap-4 py-4' onSubmit={handleSubmit(processForm)}>
      <div>
        <Input type='text' placeholder='Channel name' {...register('name')} />
        {errors.name?.message && (
          <p className='mt-1 px-2 text-xs text-red-400'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type='text'
          placeholder='Channel image URL'
          {...register('imageUrl')}
        />
        {errors.imageUrl?.message && (
          <p className='mt-1 px-2 text-xs text-red-400'>
            {errors.imageUrl.message}
          </p>
        )}
      </div>

      <div className='flex items-center justify-between'>
        <div>
          <UserSelector
            users={users}
            selectedUsers={selectedUsers}
            addUser={addUser}
            removeUser={removeUser}
          />
          {errors.selectedUsers?.message && (
            <p className='mt-1 px-2 text-xs text-red-400'>
              {errors.selectedUsers.message}
            </p>
          )}
        </div>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create channel'}
        </Button>
      </div>
    </form>
  )
}
