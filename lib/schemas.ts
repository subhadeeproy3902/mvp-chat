import { z } from 'zod'

export const NewConversationFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  imageUrl: z.string().optional(),
  selectedUsers: z.array(z.string()).min(1, 'At least one user is required.')
})
