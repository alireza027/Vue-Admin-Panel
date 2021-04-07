export default [
    {
        key: 2,
        icon: "mdi-map-marker-circle",
        href: "/plugin/map",
        text: "نقشه",
        name:"map",
        children: [
          {
            key : 1,
            icon: "mdi-map-outline",
            href: "/plugin/map/am-chart",
            title: "اَم چارت"
          },
          {
            key : 2,
            icon: "mdi-map-legend",
            href: "/plugin/map/re-chart",
            title: "ری چارت"
          },
          {
            key : 3,
            icon: "mdi-google-maps",
            href: "/plugin/map/google-map",
            title: "گوگل مپ"
          },
          
        ]
      }
]