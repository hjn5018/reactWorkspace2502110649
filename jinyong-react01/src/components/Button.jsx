// let Button = (props) => {
//     return (
//         <>
//         <button>{props.text}</button><br />
//         </>
//     )
// }
// let Button = ({text}) => {
//     return (
//         <>
//         <button>{text}</button><br />
//         </>
//     )
// }
// let Button = (props) => {
//     return (
//         <>
//         <button>{props.text}</button>
//         <button>{props.img}</button>
//         <button>{props.children}</button><br />
//         </>
//     )
// }
// let Button = ({text, children}) => {
//     return (
//         <>
//         <button>{text} {children}</button>
//         </>
//     )
// }
// let Button = ({text, img}) => {
//     return (
//         <>
//         <button>{text}</button>
//         <button>{img}</button>
//         <br />
//         </>
//     )
// }

// function Button(props) {
//   return <button style={{ color: props.color }}>{props.text}</button>;
// }
function Button({ text, color }) {
  return <button style={{ color: color }}>{text}!!</button>;
}
// function Button({ text, color }) {
//   return <button style={{ color }}>{text}!!</button>;
// }
export default Button;

// let Button = (props) => {
//     return (
//         <>
//         <button>{props.text}</button><br />
//         <button>{props.img}</button><br />
//         </>
//     )
// }

// export default Button;