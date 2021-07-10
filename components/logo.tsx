import { Icon, IconProps } from "@chakra-ui/react";

type LogoProps = IconProps;

export const Logo = ({
  mx = "auto",
  height = 12,
  width = "auto",
  display = "block",
  ...props
}: LogoProps) => (
  <Icon
    viewBox="0 0 514 482"
    fill="none"
    mx={mx}
    height={height}
    width={width}
    display={display}
    {...props}
  >
    <path
      d="M177.862 385.767C192.587 382.053 206.777 376.345 219.974 368.726C224.985 365.833 229.799 362.67 234.438 359.297C200.297 323.014 180.999 274.963 180.999 224.967C180.999 169.098 205.068 115.664 247.035 78.3645L257 69.5095L266.965 78.3655C290.29 99.0965 308.076 124.815 319.284 153.163C343.341 158.538 366.704 167.022 388.726 178.447C383.29 148.961 372.713 120.573 357.369 94.6895C334.865 56.7265 302.745 25.0205 264.482 2.9995C259.85 0.3335 254.15 0.3335 249.518 2.9995C211.168 25.0715 178.997 56.8585 156.481 94.9265C133.269 134.17 121 179.137 121 224.966C121 270.795 133.269 315.763 156.48 355.008C162.859 365.791 170.013 376.07 177.862 385.767V385.767Z"
      fill="#805AD5"
    />
    <path
      d="M359.979 350.672C366.147 339.698 371.48 328.301 375.956 316.591C365.416 305.721 353.362 296.248 340.027 288.549C335.063 285.683 329.959 283.087 324.739 280.764C310.461 328.688 278.423 369.621 234.974 394.707C186.59 422.642 128.279 428.514 74.994 410.819L62.342 406.618L65.029 393.56C71.363 362.785 84.88 334.341 104.032 310.358C96.691 286.868 92.384 262.427 91.286 237.654C68.333 257.125 48.922 280.537 34.093 306.858C12.383 345.389 0.940983 389.144 0.999983 433.392C1.00798 438.737 3.85698 443.673 8.48198 446.352C46.685 468.478 90.203 480.441 134.332 480.949C179.812 481.472 224.806 469.714 264.448 446.948L265.444 446.373C305.013 423.407 337.691 390.32 359.979 350.672V350.672Z"
      fill="#805AD5"
    />
    <path
      d="M479.907 306.357C457.525 266.633 424.718 233.525 385.028 210.61C345.339 187.695 300.262 175.837 254.669 176.317C242.17 176.449 229.719 177.5 217.424 179.44C213.207 194.122 210.999 209.432 210.999 224.968C210.999 230.59 211.293 236.177 211.854 241.713C260.383 230.246 311.693 237.551 355.027 262.57C403.411 290.505 437.652 338.066 448.97 393.059L451.658 406.118L439.006 410.318C409.301 420.183 378.035 422.715 347.796 418.191C331.172 436.317 312.217 452.312 291.357 465.692C319.639 475.75 349.546 480.796 379.668 480.449C423.797 479.941 467.315 467.978 505.518 445.852C510.143 443.174 512.993 438.237 513 432.892C513.059 388.645 501.617 344.889 479.907 306.357V306.357Z"
      fill="#805AD5"
    />
  </Icon>
);

type LogoWithMarkProps = IconProps;

export const LogoWithMark = ({
  height = 8,
  width = "auto",
  display = "block",
  ...props
}: LogoWithMarkProps) => (
  <Icon
    viewBox="0 0 1917 482"
    fill="none"
    height={height}
    width={width}
    display={display}
    {...props}
  >
    <path
      d="M177.862 385.767C192.587 382.053 206.777 376.345 219.974 368.726C224.985 365.833 229.799 362.67 234.438 359.297C200.297 323.014 180.999 274.963 180.999 224.967C180.999 169.098 205.068 115.664 247.035 78.3645L257 69.5095L266.965 78.3655C290.29 99.0965 308.076 124.815 319.284 153.163C343.341 158.538 366.704 167.022 388.726 178.447C383.29 148.961 372.713 120.573 357.369 94.6895C334.865 56.7265 302.745 25.0205 264.482 2.9995C259.85 0.3335 254.15 0.3335 249.518 2.9995C211.168 25.0715 178.997 56.8585 156.481 94.9265C133.269 134.17 121 179.137 121 224.966C121 270.795 133.269 315.763 156.48 355.008C162.859 365.791 170.013 376.07 177.862 385.767V385.767Z"
      fill="#805AD5"
    />
    <path
      d="M359.979 350.673C366.147 339.699 371.48 328.302 375.956 316.592C365.416 305.722 353.362 296.248 340.027 288.549C335.063 285.683 329.959 283.088 324.739 280.765C310.461 328.689 278.423 369.622 234.974 394.708C186.59 422.643 128.279 428.515 74.994 410.82L62.342 406.618L65.029 393.561C71.363 362.786 84.88 334.342 104.032 310.359C96.691 286.869 92.384 262.427 91.286 237.654C68.333 257.125 48.922 280.538 34.093 306.859C12.383 345.39 0.940983 389.145 0.999983 433.393C1.00798 438.738 3.85698 443.673 8.48198 446.352C46.685 468.478 90.203 480.442 134.332 480.95C179.812 481.473 224.806 469.715 264.448 446.949L265.444 446.373C305.013 423.407 337.691 390.32 359.979 350.673V350.673Z"
      fill="#805AD5"
    />
    <path
      d="M479.907 306.357C457.525 266.633 424.718 233.525 385.028 210.61C345.339 187.695 300.262 175.837 254.669 176.317C242.17 176.449 229.719 177.5 217.424 179.44C213.207 194.122 210.999 209.432 210.999 224.968C210.999 230.59 211.293 236.177 211.854 241.713C260.383 230.246 311.693 237.551 355.027 262.57C403.411 290.505 437.652 338.066 448.97 393.059L451.658 406.118L439.006 410.318C409.301 420.183 378.035 422.715 347.796 418.191C331.172 436.317 312.217 452.312 291.357 465.692C319.639 475.75 349.546 480.796 379.668 480.449C423.797 479.941 467.315 467.978 505.518 445.852C510.143 443.174 512.993 438.237 513 432.892C513.059 388.645 501.617 344.889 479.907 306.357V306.357Z"
      fill="#805AD5"
    />
    <path
      d="M705.953 296.25C705.953 292.219 703.844 288.984 699.625 286.547C695.406 284.109 687.391 281.578 675.578 278.953C663.766 276.328 654.016 272.906 646.328 268.688C638.641 264.375 632.781 259.172 628.75 253.078C624.719 246.984 622.703 240 622.703 232.125C622.703 218.156 628.469 206.672 640 197.672C651.531 188.578 666.625 184.031 685.281 184.031C705.344 184.031 721.469 188.578 733.656 197.672C745.844 206.766 751.938 218.719 751.938 233.531H704.406C704.406 221.344 697.984 215.25 685.141 215.25C680.172 215.25 676 216.656 672.625 219.469C669.25 222.188 667.562 225.609 667.562 229.734C667.562 233.953 669.625 237.375 673.75 240C677.875 242.625 684.438 244.781 693.438 246.469C702.531 248.156 710.5 250.172 717.344 252.516C740.219 260.391 751.656 274.5 751.656 294.844C751.656 308.719 745.469 320.016 733.094 328.734C720.812 337.453 704.875 341.812 685.281 341.812C672.25 341.812 660.625 339.469 650.406 334.781C640.188 330.094 632.219 323.719 626.5 315.656C620.781 307.594 617.922 299.109 617.922 290.203H662.219C662.406 297.234 664.75 302.391 669.25 305.672C673.75 308.859 679.516 310.453 686.547 310.453C693.016 310.453 697.844 309.141 701.031 306.516C704.312 303.891 705.953 300.469 705.953 296.25ZM820.281 203.156C830.406 190.406 843.344 184.031 859.094 184.031C875.875 184.031 888.531 189 897.062 198.938C905.594 208.875 909.953 223.547 910.141 242.953V339H862.609V244.078C862.609 236.016 860.969 230.109 857.688 226.359C854.406 222.516 848.828 220.594 840.953 220.594C831.203 220.594 824.312 223.688 820.281 229.875V339H772.891V123H820.281V203.156ZM1022.22 339C1020.53 335.906 1019.03 331.359 1017.72 325.359C1009 336.328 996.812 341.812 981.156 341.812C966.812 341.812 954.625 337.5 944.594 328.875C934.562 320.156 929.547 309.234 929.547 296.109C929.547 279.609 935.641 267.141 947.828 258.703C960.016 250.266 977.734 246.047 1000.98 246.047H1015.61V238.031C1015.61 224.062 1009.56 217.078 997.469 217.078C986.219 217.078 980.594 222.609 980.594 233.672H933.203C933.203 218.953 939.438 207 951.906 197.812C964.469 188.625 980.453 184.031 999.859 184.031C1019.27 184.031 1034.59 188.766 1045.84 198.234C1057.09 207.703 1062.86 220.688 1063.14 237.188V304.547C1063.33 318.516 1065.48 329.203 1069.61 336.609V339H1022.22ZM992.547 308.062C998.453 308.062 1003.33 306.797 1007.17 304.266C1011.11 301.734 1013.92 298.875 1015.61 295.688V271.359H1001.83C985.328 271.359 977.078 278.766 977.078 293.578C977.078 297.891 978.531 301.406 981.438 304.125C984.344 306.75 988.047 308.062 992.547 308.062ZM1181.55 229.734L1165.94 228.609C1151.03 228.609 1141.47 233.297 1137.25 242.672V339H1089.86V186.844H1134.3L1135.84 206.391C1143.81 191.484 1154.92 184.031 1169.17 184.031C1174.23 184.031 1178.64 184.594 1182.39 185.719L1181.55 229.734ZM1269.44 341.812C1246.09 341.812 1227.2 334.875 1212.77 321C1198.33 307.031 1191.11 288.891 1191.11 266.578V262.641C1191.11 247.078 1193.97 233.344 1199.69 221.438C1205.5 209.531 1213.94 200.344 1225 193.875C1236.06 187.312 1249.19 184.031 1264.38 184.031C1285.75 184.031 1302.62 190.688 1315 204C1327.38 217.219 1333.56 235.688 1333.56 259.406V277.828H1239.34C1241.03 286.359 1244.73 293.062 1250.45 297.938C1256.17 302.812 1263.58 305.25 1272.67 305.25C1287.67 305.25 1299.39 300 1307.83 289.5L1329.48 315.094C1323.58 323.25 1315.19 329.766 1304.31 334.641C1293.53 339.422 1281.91 341.812 1269.44 341.812ZM1264.09 220.594C1250.22 220.594 1241.97 229.781 1239.34 248.156H1287.16V244.5C1287.34 236.906 1285.42 231.047 1281.39 226.922C1277.36 222.703 1271.59 220.594 1264.09 220.594ZM1458.72 157.594C1450.66 156.938 1443.86 156.609 1438.33 156.609C1419.95 156.609 1410.77 163.781 1410.77 178.125V186.844H1440.44V219.75H1410.77V339H1363.23V219.75H1341.16V186.844H1363.23V177C1363.33 158.812 1369.19 144.797 1380.81 134.953C1392.53 125.016 1409.27 120.047 1431.02 120.047C1446.48 120.047 1471.61 121.031 1506.39 123V339H1458.72V157.594ZM1529.31 261.516C1529.31 246.328 1532.27 232.828 1538.17 221.016C1544.08 209.109 1552.56 199.969 1563.62 193.594C1574.69 187.219 1587.67 184.031 1602.58 184.031C1625.36 184.031 1643.31 191.109 1656.44 205.266C1669.56 219.328 1676.12 238.5 1676.12 262.781V264.469C1676.12 288.188 1669.52 307.031 1656.3 321C1643.17 334.875 1625.36 341.812 1602.86 341.812C1581.2 341.812 1563.81 335.344 1550.69 322.406C1537.56 309.375 1530.48 291.75 1529.45 269.531L1529.31 261.516ZM1576.7 264.469C1576.7 278.531 1578.91 288.844 1583.31 295.406C1587.72 301.969 1594.23 305.25 1602.86 305.25C1619.73 305.25 1628.36 292.266 1628.73 266.297V261.516C1628.73 234.234 1620.02 220.594 1602.58 220.594C1586.73 220.594 1578.16 232.359 1576.84 255.891L1576.7 264.469ZM1828.42 276.562L1843.75 186.844H1889.17L1853.31 339H1813.23L1788.06 248.719L1762.75 339H1722.67L1686.81 186.844H1732.23L1747.28 278.672L1771.47 186.844H1804.52L1828.42 276.562Z"
      fill="#1A202C"
    />
  </Icon>
);
