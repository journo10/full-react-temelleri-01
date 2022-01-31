import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isDarkTheme, darkTheme, lightTheme } = themeContext;
//           const { isLoggedin, onChangeAuthStatus } = authContext;
//           const theme = isDarkTheme ? darkTheme : lightTheme;
//           return (
//             <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
//               <h2 style={{ textAlign: 'center' }}>Academy</h2>
//               <p onClick={onChangeAuthStatus} style={{ textAlign: 'center', color:'red' }}>
//                 {isLoggedin ? 'Logged in' : 'Logged out'}</p>
//               <div className="three ui buttons">
//                 <button className="ui button">Overview</button>
//                 <button className="ui button">Contact</button>
//                 <button className="ui button">Support</button>
//               </div>
//             </nav>
//           )
//         }}
//         </ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>
//     )
//   }
// }
// export default Navbar;

//NOT =>ThemeContext.Consumer type ise hem function component'a hemde class component'a kullanabilirsin...


//Yukardaki yapılan örneği useContext() Hook'u ile yapımı: AŞAĞIDAKİNİ KULLAN UNUTMA...
const Navbar1 = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedin, onChangeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
      <h2 style={{ textAlign: 'center' }}>Academy</h2>
      <p onClick={onChangeAuthStatus} style={{ textAlign: 'center', color: 'red' }}>
        {isLoggedin ? 'Logged in' : 'Logged out'}</p>
      <div className="three ui buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  )
}
export default Navbar1;