export default [
    {
        key: 5,
        icon: "mdi-message-alert",
        href: "/components/feedback",
        text: "بازخورد",
        name:"feedback",
        children: [
          {
            key: 1,
            title: "اَلرت",
            href: "/components/feedback/alert",
            icon: "mdi-bell-alert",
          },
          {
            key: 2,
            title: "پیش رونده",
            href: "/components/feedback/progress",
            icon: "mdi-progress-check",
          },
          {
            key: 3,
            title: "صفحه",
            href: "/components/feedback/bottom-sheet",
            icon: "mdi-google-spreadsheet",
          },
          {
            key: 4,
            title: "مدال",
            href: "/components/feedback/modal",
            icon: "mdi-overscan",
          },
          {
            key: 5,
            title: "نمایش پیام",
            href: "/components/feedback/snackbar",
            icon: "mdi-notification-clear-all",
          },
        ],
      },
]