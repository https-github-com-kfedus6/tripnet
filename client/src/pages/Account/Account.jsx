import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import { useTranslation } from 'react-i18next';
import GooglePayButton from '@google-pay/button-react';

import '../Account/account.css'

const Account = () => {

    const navigate = useNavigate();

    const { t } = useTranslation()

    const { is_admin, is_login, user, reply } = useSelector(state => state.user)
    const { userHistoty, flightAccountOrders } = useSelector(state => state.order)

    const { language } = useSelector(state => state.language)

    const { SetShowMessgeFalse, SetShowMessgeTrue, getUserHistory,
        EditEmail, IsAuthorize, ChangePassword, fetchGetFlightAccountOrders } = useAction()

    /*  const [oldPassword, setOldPassword] = useState("");
     const [newPassword, setNewPassword] = useState("");
     const [newPassword2, setNewPassword2] = useState("");
     const [isChangePass, setIsChangePass] = useState("false")
 
     const [checkPassword, setCheckPassword] = useState(false);
     const [checkEmail, setCheckEmail] = useState(false);
     const [newEmail, setNewEmail] = useState("");
 
     const [phoneValue, setPhoneValue] = useState("") */

    useEffect(() => {
        fetchGetFlightAccountOrders()
        getUserHistory();
    }, [])

    /*   useEffect(() => {
          if (isChangePass) {
              if (reply == 200) {
                  setOldPassword("");
                  setNewPassword("");
                  setNewPassword2("");
              }
              setIsChangePass(false);
          }
      }, [reply]) */

    /*  const exit = () => {
         localStorage.removeItem("token");
         IsAuthorize();
         navigate("/");
     } */

    /*  const toggle = (i, id) => {
         if (isActive == i) {
             return setIsActive(null);
         }
         setIsActive(i);
     } */

    return (
        <div className='container-account'>
            <div className='block-account'>
                <div className='bread-crumbs-main'>
                    <div className='bredcrumbs-flight'>
                        <span className='bredcrumbs-flight-services-link'><NavLink to="/">{t("header.first_link")}</NavLink></span>
                        <span><img src={process.env.REACT_APP_API_URL + 'chevron-right.png'} alt="right" /></span>
                        <span className='bredcrumbs-flight-text'>{t("account.personal_office")}</span>
                    </div>
                    <div className="account-user-profile account-user-profile-none">
                        <b>{t("account.profile")}</b>
                        <div className="account-surname-with-name">
                            <span>{user.name + " " + user.surname}</span>
                            <span>{user.email}</span>
                        </div>
                        <div className="account-setting-profile-button">
                            <button onClick={() => navigate("/account/edit")}>{t("account.setting_profile")}</button>
                        </div>
                    </div>
                    <div className='block-fligth-cart-profile-account'>
                        <div className='block-fligth-cart-items'>
                            <div className='account-main-title'>
                                <b>{t("account.my_booking")}</b>
                            </div>
                            {flightAccountOrders.map(item => {
                                let itemUserHistory = userHistoty.filter(user => user.flightId === item.id)
                                let objUserHistory = itemUserHistory.reduce((target, key) => {
                                    target = key
                                    return target;
                                }, {})

                                return (
                                    <div key={item.id} className='block-flight-cart-account'>
                                        {objUserHistory.status === null ?
                                            <div className='flight-cart-account-status-processing'>
                                                <img src={process.env.REACT_APP_API_URL + 'clock-pink.png'} alt="time" />
                                                <span>В обробці</span>
                                            </div>
                                            :
                                            objUserHistory.status === true
                                                ?
                                                <div className='flight-cart-account-status-success'>
                                                    <img src={process.env.REACT_APP_API_URL + 'check.png'} alt="time" />
                                                    <span>Підтверджено</span>
                                                </div>
                                                :
                                                <div className='flight-cart-account-status-cancelled'>
                                                    <img src={process.env.REACT_APP_API_URL + 'x-x.png'} alt="time" />
                                                    <span>Скасовано</span>
                                                </div>
                                        }
                                        <div className='item-start-finish-position-account'>
                                            <div className='item-position-account'>
                                                <div className='item-street-start-finish-account'>
                                                    <div>
                                                        <img src={process.env.REACT_APP_API_URL + item.flagStart} alt="flag" />
                                                        <span>{item.startPosition[language]}</span>
                                                    </div>
                                                    <span>{item.streetStartPosition[language]}</span>
                                                    <div className='item-time-date-account'>
                                                        <span>{item.startTime}</span>
                                                        <span>{item.startDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='item-position-account'>
                                                <div className='item-street-start-finish-account'>
                                                    <div>
                                                        <img src={process.env.REACT_APP_API_URL + item.flagFinish} alt="flag" />
                                                        <span>{item.finishPosition[language]}</span>
                                                    </div>
                                                    <span>{item.streetFinishPosition[language]}</span>
                                                    <div className='item-time-date-account'>
                                                        <span>{item.finishTime}</span>
                                                        <span>{item.finishDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-detailed-payment-group'>
                                            <div className={objUserHistory.status === null ? 'item-payment' : 'item-payment-none'}>
                                                <div>
                                                    <span>Оплата бронювання</span>
                                                </div>
                                                <div className='item-payment-price'>
                                                    <div>
                                                        <span>До сплати: {+item.price * +objUserHistory.countPersons} грн</span>
                                                    </div>
                                                    <div>
                                                        <img src={process.env.REACT_APP_API_URL + 'info-silver.png'} alt="info" />
                                                        <span>Оплата стане доступною після підтвердження бронювання.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='item-detailed-info-main'>
                                                <div>
                                                    <button>Детальна інформація</button>
                                                    <img src={process.env.REACT_APP_API_URL + 'Vector-account.png'} alt="vector" />
                                                </div>
                                                <div>
                                                    <NavLink to={`/flight/${item.startPosition[language]}-${item.finishPosition[language]}/${item.id}`}>Сторінка рейсу</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="block-account-user">
                            <div className="account-user-profile account-user-profile-none-second">
                                <b>{t("account.profile")}</b>
                                <div className="account-surname-with-name">
                                    <span>{user.name + " " + user.surname}</span>
                                    <span>{user.email}</span>
                                </div>
                                <div className="account-setting-profile-button">
                                    <button onClick={() => navigate("/account/edit")}>{t("account.setting_profile")}</button>
                                </div>
                            </div>
                            <div className="account-message">
                                <div className='flight-message-icon'>
                                    <img src={process.env.REACT_APP_API_URL + 'info-blue.png'} alt='info' />
                                </div>
                                <div className="account-message-title-description">
                                    <b>{t("account.message_title")}</b>
                                    <span>{t("account.message_description")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
и                    <GooglePayButton
                        environment="PRODUCTION"
                        buttonColor='white'
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                    },
                                },
                            ],
                            merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: '100.00',
                                currencyCode: 'GBP',
                                countryCode: 'UA',
                            },
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                        }}
                    />

                </div>
            </div>
        </div>

    )
}

export default Account;
/*<LiqPayPay
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    amount="3"
                    description="Payment for product"
                    currency="UAH"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{ margin: "8px" }}
                    disabled={true}
                    />
                    <LiqPaySubscribe
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    amount="3"
                    subscribePeriodicity="month"
                    description="Payment for subscription"
                    currency="USD"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{ margin: "8px" }}
                    disabled={false}
                    />
                    <LiqPayPay
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    privateKey={process.env.REACT_APP_PRIVATE_KEY}
                    description="Payment for product"
                    orderId={Math.floor(1 + Math.random() * 900000000)}
                    result_url="http://domain.com/user/account"
                    server_url="http://server.domain.com/liqpay"
                    product_description="Online courses"
                    style={{
                        backgroundColor: '#337ab7',
                        color: '#fff',
                        borderColor: '#2e6da4',
                        border: '1px solid transparent',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        cursor: 'pointer'
                      }}
                    />
                    */