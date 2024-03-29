import logo from "@assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { Link, redirect, useRouteError } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useSubmit, useNavigation } from "react-router-dom";
import { httpService } from "@core/http-service";


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    const { t } = useTranslation()

    const submitForm = useSubmit();
    const onSubmit = data =>
        submitForm(data, { method: 'post' })

    const navigation = useNavigation()
    const issubmitting = navigation.state !== 'idle'

    const routeErrors = useRouteError()
    return (
        <>
            <div className="text-center mt-4">
                <img src={logo} style={{ height: "100px" }} />
                <h1 className="h2">  {t("login.title")}</h1>
                <p className="lead">
                    جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
                </p>
                <p className="lead">
                    قبلا ثبت نام نکرده اید؟
                    <Link to="/register" className="me-2">ثبت نام کنید </Link>
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="m-sm-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">موبایل</label>
                                <input {...register("mobile", {
                                    required: 'موبایل الزامی است',
                                    minLength: 11,
                                    maxLength: 11
                                })} className={`${errors.mobile && "is-invalid"} ? form-control form-control-lg`} />
                                {
                                    errors.mobile && errors.mobile.type === 'required' && (
                                        <p className="text-danger smal fw-bolder mt-">
                                            {errors.mobile?.message}
                                        </p>
                                    )
                                }
                                {
                                    errors.mobile &&
                                    (errors.mobile.type === 'minLength' ||
                                        errors.mobile.type === 'maxLength') && (
                                        <p className="text-danger small fw-bolder mt-1">
                                            موباید باید 11 رقم باشد
                                        </p>
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">رمز عبور</label>
                                <input
                                    {...register('password', {
                                        required: 'رمز عبور الزامی است',
                                    })}
                                    className={`form-control form-control-lg mb-2 ${errors.password && 'is-invalid'}`}
                                    type="password"
                                />
                                {
                                    errors.password && errors.password.type === 'required' && (
                                        <p className="text-danger smal fw-bolder mt-1">
                                            {errors.password?.message}
                                        </p>
                                    )
                                }
                            </div>
                            <div className="text-center mt-3">
                                <button disabled={issubmitting} type="submit" className="btn btn-lg btn-primary">
                                    وارد شوید
                                    {/* {
                                        issubmitting ? t('login.signingin') : t('login.signin')
                                    } */}
                                </button>
                            </div>
                            {
                                routeErrors && (
                                    <div className="alert alert-danger tetx-danger p-2 mt-3 ">
                                        {
                                            routeErrors.response?.data.map(error =>
                                                <p className="mb-0">{error.decsription}
                                                    {/* {t(`login.validation.${error.code}`)} */}
                                                </p>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export async function loginAction({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response = await httpService.post('./Users/login , data')
    if (response.status === 200) {
        localStorage.setItem('token', response?.data.token)
        return redirect('/')
    }
}
export default Login;
