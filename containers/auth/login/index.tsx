//TODO:Importaciones de librerias
import React from "react";
import { Checkbox,Input,Button, Text,Row} from "@nextui-org/react";
import { Formik, Form } from "formik";
// import { useRouter } from 'next/router'
// import {useDispatch } from 'react-redux';
//TODO:Importaciones creadas
import {  EmailIcon,  PasswordIcon,  GoogleIcon, FacebookIcon } from "@/components/common/Icons";
import { validateFields ,initialValues } from "./validations";
import { ErrorMessage } from "@/components/common/Validates/errors";
// import { startLogin } from "./functions/startLogin";
// import { addUser } from "slices/auth";
// import { signIn } from "next-auth/react";
// import { addLoading } from "slices/loading";
// import { addAlert } from "slices/alert";

const Login = () => {
//   const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#012E40] to-[#03738C] w-full">
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-12 w-full">
          <div className=" col-span-12 px-3 md:col-start-2 md:col-span-10">
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 hidden md:block ">
                <div className="rounded-l-lg shadow-lg  w-full bg-white bg-[url('/img/login.gif')] bg-no-repeat bg-contain bg-center h-full "></div>
              </div>
              <div className="col-span-2 md:col-span-1 ">
                <div className="bg-transparent md:bg-white rounded-r-lg ">
                  <div className="bg-white md:bg-[#D7D7D9] rounded-lg   p-5 md:p-10 ">
                  <Formik
                      initialValues={initialValues}
                      validationSchema={validateFields}
                      onSubmit={async (values, { setSubmitting }) => {
                        // dispatch(addLoading({isOpen: true ,message:"Validando tus datos"}));
                        // const { message,status,data,token }:{message:string,status:string,data:any,token:any} = await startLogin(values);
                        // dispatch(addAlert({isOpen: true, message, status}));
                        // if(status=="success"){
                        //   dispatch(addUser({isLoggedIn: true,username: data}));
                        //   await signIn('credentials',{username:data.username,image:data.image,email:data.email,role:data.usertype});
                        // }
                        // dispatch(addLoading({isOpen: false}));
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <Form>
                          <div className="grid grid-cols-1 ">
                            <div className="col-span-1 text-center py-2">
                              <h4 className="mb-0"> BIENVENIDO (A) ! </h4>
                            <span>Ingrese su correo electrónico y contraseña para iniciar sesión</span>
                            </div>
                            <div className="col-span-1  ">
                            {/* <p>Correo electrónico</p> */}
                              <Input
                                type="email"
                                name="identifier"
                                onChange={handleChange}
                                clearable
                                bordered
                                fullWidth
                                color={ errors.identifier && touched.identifier?'error':'primary'}
                                size="lg"
                                label="Correo electrónico"
                                placeholder="ejm@ejemplo.com"
                                contentLeft={<EmailIcon color="currentColor" />}
                              />
                                {<ErrorMessage error={errors.identifier} touched={touched.identifier} />}
                            </div>
                            <div className="col-span-1 ">
                              {/* <p>Contraseña</p> */}
                              <Input.Password
                                type="password"
                                name="password"
                                onChange={handleChange}
                                clearable
                                bordered
                                fullWidth
                                color={ errors.password && touched.password?'error':'primary'}
                                size="lg"
                                 label="Contraseña"
                                placeholder="xxxxxxxxx"
                                contentLeft={
                                  <PasswordIcon color="currentColor" />
                                }
                              />
                                {<ErrorMessage error={errors.password} touched={touched.password} />}
                                
                            </div>
                            <div className="col-span-1 ">
                              <Row justify="space-between">
                                <Checkbox>
                                  <Text size={14}>Recordame</Text>
                                </Checkbox>
                                <Text size={14}>Olvido su contraseña?</Text>
                              </Row>
                            </div>
                            <div className="col-span-1 py-1  ">
                              <Row justify="center" align="center">
                                <Button
                                  type="submit"
                                  color="primary"
                                  auto
                                  className={
                                    " transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#0072F5] duration-300 "
                                  }
                                >
                                  Iniciar sesion
                                </Button>
                              </Row>
                            </div>
                            <div className="col-span-1 py-1">
                              <div className="grid grid-cols-6 items-center">
                                <div className="col-span-6 md:col-span-2 h-1 w-full bg-gradient-to-r from-[#D7D7D9] to-[#012E40] hidden md:block"></div>
                                <div className="col-span-6 md:col-span-2 text-center pb-2 md:pb-0">
                                  O inicia con:{" "}
                                </div>
                                <div className="col-span-6 md:col-span-2 h-1 bg-gradient-to-r from-white to-[#012E40] md:bg-gradient-to-r md:from-[#012E40] md:to-[#D7D7D9] "></div>
                              </div>
                            </div>
                            <div className="col-span-1 py-1 px-11 md:px-0">
                              <div className="flex flex-col  justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                                <Button
                                size="sm"
                                  rounded
                                  bordered
                                  css={{ backgroundColor: "white" }}
                                  className={
                                    " transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#012E40]  hover:text-white duration-300 "
                                  }
                                  icon={<GoogleIcon />}
                                >
                                  + Google
                                </Button>
                                <Button
                                size="sm"
                                  rounded
                                  bordered
                                  css={{ px: "$13", backgroundColor: "white" }}
                                  className={
                                    "border rounded  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#012E40]  hover:text-white duration-300 "
                                  }
                                  icon={<FacebookIcon />}
                                >
                                  Facebook
                                </Button>
                                <div></div>
                              </div>
                            </div>
                            <div className="col-span-1 pt-3">
                              <Row justify="center" align="center">
                                <Text size={10} weight="bold">
                                  {`© AGUA POTABLE MOLLEPAMBA  ${new Date().getFullYear()} - POWERED BY TECH SEED`}
                                </Text>
                              </Row>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
