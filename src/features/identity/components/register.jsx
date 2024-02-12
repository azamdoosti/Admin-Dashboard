import logo from "@assets/images/logo.svg";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import httpService from '@core/http-service'
import { Link, useActionData, useNavigate, useNavigation, useSubmit, useRouteError } from "react-router-dom";


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm()

    const submitForm = useSubmit()
    // const onSubmit = data => console.log(data)
    const onSubmit = (data) => {
        const [confirmPassword, ...useData] = data
        submitForm(useData, { method: 'post' })
    }

    const navigation = useNavigation()
    const isSubmitting = navigation.state !== 'idle'

    const isSuccessOperatoin = useActionData()

    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccessOperatoin) {
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
    }, [isSuccessOperatoin])

    const routeErrors = useRouteError()

    const { t } = useTranslation()

    return (
        <>
            <div className="text-center mt-40">
                <img src={logo} style={{ height: "100px" }} />
                <h1 className="h2">پلتفرم آنلاین</h1>
                <p className="lead">
                    {t('register.IntoMessage')}
                </p>
                <p className="lead">
                    قبلا ثبت نام کرده اید؟
                    <Link to="/login" className="me-2"> وارد شوید </Link>
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="m-sm-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">{t('register.mobile')}</label>
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
                                <div className="mb-3">
                                    <label className="form-label"> تکرار رمز عبور </label>
                                    <input
                                        {...register('confirmPassword', {
                                            required: 'تکرار رمز عبور الزامی است',
                                            validate: value => {
                                                if (watch('password') != value) {
                                                    return 'عدم تطابق رمز وارد شده'
                                                }
                                            }
                                        })}
                                        className={`form-control form-control-lg mb-2 ${errors.confirmPassword && 'is-invalid'}`}
                                        type="password"
                                    />
                                    {
                                        errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                                            <p className="text-danger smal fw-bolder mt-1">
                                                {errors.confirmPassword?.message}
                                            </p>
                                        )
                                    }
                                    {
                                        errors.confirmPassword &&
                                        errors.confirmPassword.type === 'validate' && (
                                            <p className="text-danger smal fw-bolder mt-1">
                                                {errors.confirmPassword?.message}
                                            </p>
                                        )
                                    }
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary">
                                        {console.log('Translated text:', t('register.register'))}
                                        {t('register.register')}
                                        {/* {isSubmitting ? 'در حال انجام عملیات' : 'ثبت نام کنید'} */}
                                    </button>
                                </div>
                            </div>
                            {isSuccessOperatoin && (
                                <div className="alert alert-success text-success p-2 mt-3">
                                    عملیات با موفقیت انجام شد، به صفحه ورورد منتقل می شوید.
                                </div>
                            )}

                            {
                                routeErrors && (
                                    <div className="alert alert-danger tetx-danger p-2 mt-3 ">
                                        {
                                            routeErrors.response?.data.map(error =>
                                                <p className="mb-0">{error.decsription}
                                                    {/* {t(`register.validation.${error.code}`)} */}
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
    )
}

export default Register

export async function registerAction({ request }) {
    const formData = await requestAnimationFrame.formData()
    const data = object.fromEntries(formData)
    const response = await httpServeice.post('./Users', data)
    return response.status === 200
} 