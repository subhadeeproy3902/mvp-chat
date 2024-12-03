'use client'

import { PropsWithChildren, useState } from 'react'

import {
  DefaultStreamChatGenerics,
  ChannelListMessengerProps,
  LoadingErrorIndicator,
  LoadingIndicator
} from 'stream-chat-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import NewConversationForm from '@/components/new-conversation-form'

import { MessageSquarePlus } from 'lucide-react'

export default function CustomListContainer(
  props: PropsWithChildren<ChannelListMessengerProps<DefaultStreamChatGenerics>>
) {
  const { loadedChannels, error, loading, children } = props
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  function closeDialog() {
    setDialogIsOpen(false)
  }

  if (error) {
    return <LoadingErrorIndicator />
  }

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <section>
      <div className='relative hidden flex-col items-start gap-8 p-4 md:flex'>
        <header className='w-full'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Chats</h1>

            <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
              <DialogTrigger>
                <MessageSquarePlus className='size-6' />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create new channel</DialogTitle>
                  <DialogDescription>
                    Start a new conversation with someone
                  </DialogDescription>
                </DialogHeader>

                <NewConversationForm onSuccess={closeDialog} />
              </DialogContent>
            </Dialog>
          </div>

          <div className='mt-4'>
            <Input placeholder='Search...' className='bg-muted' />
          </div>
        </header>
      </div>

      <div className='str-chat__channel-list-messenger str-chat__channel-list-messenger-react'>
        <div
          className='str-chat__channel-list-messenger__main str-chat__channel-list-messenger-react__main'
          role='listbox'
        >
          {children}
        </div>
      </div>
    </section>
  )
}
