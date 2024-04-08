"use client";

import { ButtonBase } from "@/components/buttons/buttonBase";
import { createUserSchema } from "@/helpers/SchecmaValidate";
import { User } from "@/models/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { InputBase } from '../components/inputs/InputBase';
import { register } from 'module';

export default function Home() {

  const methods = useForm<User>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: "",
      age: 0,
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<User> = (data: User) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-dark-blue font-bold">
          Formulario base
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-7 mt-10 mb-7">
                <div className="text-black flex flex-col gap-3">
                  <InputBase
                    name="name"
                    label={"Nombre"}
                    placeholder={"Ingrese su nombre"}
                  />
                  <InputBase
                    name="lastName"
                    label={"Apellido"}
                    placeholder={"Ingrese su apellido"}
                  />
                  <InputBase
                    name="password"
                    label={"Contraseña"}
                    placeholder={"********"}
                    type="password"
                  />
                </div>
                <div className="text-black flex flex-col gap-3">
                  <InputBase
                    name="age"
                    label={"Edad"}
                    placeholder={"Ingrese su edad"}
                    type="number"
                  />
                  <InputBase
                    name="email"
                    label={"Correo"}
                    placeholder={"Ingrese su correo"}
                    type="email"
                  />
                  <InputBase
                    name="confPassword"
                    label={"Confirmar contraseña"}
                    placeholder={"********"}
                    type="password"
                  />
                </div>
              </div>
              <ButtonBase
                type="submit"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  );
}
