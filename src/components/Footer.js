import React from 'react';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => (
  <footer className="footer">
    <p>Dude footer</p>
  
  </footer>
);
  
export default Footer;
  
// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ color: "white", 
//         textAlign: "center", 
//         marginTop: "-50px" }}>
//         A resource for finding your missing car in Portland Oregon.
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>Other Resources</Heading>
//             <FooterLink href="#">TBD</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <FooterLink href="#">TBD</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <FooterLink href="#">Portland</FooterLink>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <FooterLink href="#">
//               <i className="ShaneDude">
//                 <span style={{ marginLeft: "10px" }}>
//                   LinkedIn
//                 </span>
//               </i>
//             </FooterLink>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;