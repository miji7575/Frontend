// import { css } from "@emotion/react";


// export const GlobalStyles = css`

// :root{
//     /* header */
//     --header-height: 90px;
    
//     /* color */
//       --color-purple1 : #6F50ED;
//       --color-purple2 : #937CF1;
//       --color-purple3 : #BBACF6;
//       --color-purple4 : #E1DAFB;
//       --color-purple5 : #F4F1FE;
    
//       --color-skyblue1 : #26A9F2;
//       --color-skyblue2 : #57BCF5;
//       --color-skyblue3 : #87CFF8;
//       --color-skyblue4 : #B7E2FB;
//       --color-skyblue5 : #E7F5FE;
      
//       --color-green1 : #1BBB9E;
//       --color-green2 : #29E0BF;
//       --color-green3 : #67E9D2;
//       --color-green4 : #A6F2E4;
//       --color-green5 : #E4FBF7;
    
//       --color-black1: #121212;
//       --color-black2: #333333;
//       --color-black3: #555555;
//       --color-black4: #888888;
//       --color-black5: #A6A6A6;
//       --color-black6: #CCCCCC;
//       --color-black7: #DBDBDB;
//       --color-black8: #EDEDED;
//       --color-black9: #F4F4F4;
//       --color-black10: #F8F8F8;
    
//       --color-white : #FFFFFF;
    
    
//       --color-error: #EA3838;
//       --color-info: #387FEA;
//       --color-success: #1CCC78;
//       --color-warning: #F99A2A;
//     }
    
//     color-purple1 {color: #6F50ED;}
//     color-purple2 {color: #937CF1;}
//     color-purple3 {color: #BBACF6;}
//     color-purple4 {color: #E1DAFB;}
//     color-purple5 {color: #F4F1FE;}
    
//     color-skyblue1 {color: #26A9F2;}
//     color-skyblue2 {color: #57BCF5;}
//     color-skyblue3 {color: #87CFF8;}
//     color-skyblue4 {color: #B7E2FB;}
//     color-skyblue5 {color: #E7F5FE;}
    
//     color-green1 {color: #1BBB9E;}
//     color-green2 {color: #29E0BF;}
//     color-green3 {color: #67E9D2;}
//     color-green4 {color: #A6F2E4;}
//     color-green5 {color: #E4FBF7;}
    
//     color-black1{color: #121212;}
//     color-black2{color: #333333;}
//     color-black3{color: #555555;}
//     color-black4{color: #888888;}
//     color-black5{color: #A6A6A6;}
//     color-black6{color: #CCCCCC;}
//     color-black7{color: #DBDBDB;}
//     color-black8{color: #EDEDED;}
//     color-black9{color: #F4F4F4;}
//     color-black10{color: #F8F8F8;}
    
//     color-white {color: #FFFFFF;}
       
//     color-error{color: #EA3838;}
//     color-info{color: #387FEA;}
//     color-success{color: #1CCC78;}
//     color-warning{color: #F99A2A;}
        
    
//     bg-white{ background-color: var(--color-white); }
    
    
//     /* Typhography */
    
//     @font-face { 
//       font-family: 'Pretendard-Bold'; 
//       src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff'); 
//       font-weight: bold; 
//       font-style: normal; 
//     }
    
//     @font-face { 
//       font-family: 'Pretendard-Medium'; 
//       src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff'); 
//       font-weight: 500; 
//       font-style: normal; 
//     }
    
//     @font-face { 
//       font-family: 'Pretendard-Regular'; 
//       src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff'); 
//       font-weight: 400; 
//       font-style: normal; 
//     }
    
    

// /* --- headline --- */
// headline1{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 40px;
//     line-height: 52px;
//   }
//   headline2{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 32px;
//     line-height: 42px;
//   }
//   headline3{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 28px;
//     line-height: 38px;
//   }
//   headline4{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 24px;
//     line-height: 32px;
//   }
//   headline5{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 20px;
//     line-height: 28px;
//   }
//   /* --- body --- */
//   body1_bold{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 18px;
//     line-height: 26px;
//   }
//   body1_medium{
//     font-family: 'Pretendard-Medium'; 
//     font-size: 18px;
//     line-height: 26px;
//   }
//   body1_regular{
//     font-family: 'Pretendard-Regular'; 
//     font-size: 18px;
//     line-height: 26px;
//   }
//   body2_bold{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 16px;
//     line-height: 24px;
//   }
//   body2_medium{
//     font-family: 'Pretendard-Medium'; 
//     font-size: 16px;
//     line-height: 24px;
//   }
//   body2_regular{
//     font-family: 'Pretendard-Regular'; 
//     font-size: 16px;
//     line-height: 24px;
//   }
//   body3_bold{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 14px;
//     line-height: 20px;
//   }
//   body3_medium{
//     font-family: 'Pretendard-Medium'; 
//     font-size: 14px;
//     line-height: 20px;
//   }
//   body3_regular{
//     font-family: 'Pretendard-Regular'; 
//     font-size: 14px;
//     line-height: 20px;
//   }
  
//   /* --- caption --- */
  
//   caption1_bold{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 12px;
//     line-height: 16px;
//   }
//   caption1_medium{
//     font-family: 'Pretendard-Medium'; 
//     font-size: 12px;
//     line-height: 16px;
//   }
//   caption1_regular{
//     font-family: 'Pretendard-Regular'; 
//     font-size: 12px;
//     line-height: 16px;
//   }
  
//   caption2_bold{
//     font-family: 'Pretendard-Bold'; 
//     font-size: 10px;
//     line-height: 12px;
//   }
//   caption2_medium{
//     font-family: 'Pretendard-Medium'; 
//     font-size: 10px;
//     line-height: 12px;
//   }
//   caption2_regular{
//     font-family: 'Pretendard-Regular'; 
//     font-size: 10px;
//     line-height: 12px;
//   }
  
  
  
  
  
  
  
//   /* Util */
  
//   /* GRID, radious,  */
  
//   /* 자주쓰는 컴포넌트들 */
  
//   d-none{
//     display: none;
//   }
//   `

//   export default GlobalStyles;