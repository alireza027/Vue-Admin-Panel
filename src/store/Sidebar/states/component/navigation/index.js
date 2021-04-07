export default [
    {
        key: 2,
        icon: "mdi-navigation-outline",
        href: "/components/navigation",
        text: "نویشگیشن",
        name:"navigations",
        children: [
          {
            key: 1,
            title: "آدرس بار",
            href: "/components/navigations/breadcrumbs",
            icon: "mdi-slash-forward-box",
          },
          {
            key: 2,
            title: "صفحه بندی",
            href: "/components/navigations/pagination",
            icon: "mdi-numeric",
          },
          {
            key: 3,
            title: "منو",
            href: "/components/navigations/menus",
            icon: "mdi-menu-open",
          },
          {
            key: 4,
            title: "منو ناوبری",
            href: "/components/navigation/bottom-navigations",
            icon: "mdi-navigation",
          },
        ],
      },
]