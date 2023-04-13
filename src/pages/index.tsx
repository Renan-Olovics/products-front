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
            {/* <Input name="Teste1" defaultValue="123" />
            <Input name="Teste2" />
            <Input name="Teste3" />
          <Input name="Teste4" /> */}
            {/* <BasicInput name="Teste3" mask="99%" /> */}
            {/* <Input name="Teste3" /> */}
            <InputMask mask="99/99/99" className="text-black" />
            <input type="submit" />
          </FormProvider>
        </form>
      </div>
    </div>
  )
}

export default Home
