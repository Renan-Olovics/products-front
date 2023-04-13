import { FormProvider, useForm } from 'react-hook-form'

import InputMask from 'react-input-mask'

import { toggleTheme } from '@/utils'

const Home = () => {
  const form = useForm()

  return (
    <div className="bg-gray-900 font-roboto dark:bg-gray-500  h-screen m-40">
      <button onClick={toggleTheme} type="button">
        toggleTheme
      </button>
      <div className="w-60 flex gap-4 flex-col">
        <form onSubmit={form.handleSubmit((a) => console.log(a))}>
          <FormProvider {...form}>
            <InputMask mask="99/99/99" className="text-black" />
            <input type="submit" />
          </FormProvider>
        </form>
      </div>
    </div>
  )
}

export default Home
