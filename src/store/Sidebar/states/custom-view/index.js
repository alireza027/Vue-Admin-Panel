export default [
    {
        key: 5,
        icon: "mdi-view-dashboard-variant",
        text: "صفحات سفارشی",
        name:"custom-view",
        item:[
          {
            key: 1,
            icon: "mdi-account",
            href: "/custom-view/authenticate",
            text: "احراز هویت",
            name:"authenticate",
            children: [
              {
                key: 1,
                icon: "mdi-account-plus",
                href: "/custom-view/authenticate/register",
                title: "ثبت نام"
              },
              {
                key: 2,
                icon: "mdi-key-remove",
                href: "/custom-view/authenticate/reset-password",
                title: "ریست رمز"
              },
              {
                key: 3,
                icon: "mdi-card-account-details-outline",
                href: "/custom-view/authenticate/forget-password",
                title: "فراموشی رمز"
              },
              {
                key: 4,
                icon: "mdi-login-variant",
                href: "/custom-view/authenticate/login",
                title: "ورود"
              },
            ]
          }
        ]
      },
]