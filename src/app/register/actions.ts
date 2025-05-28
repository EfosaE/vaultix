// actions.ts
'use server'

export async function registerUser(data: FormData) {
  const userData = Object.fromEntries(data)
  console.log('Registering user with data:', userData)
}
