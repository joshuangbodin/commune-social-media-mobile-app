export const theme = {
    primary:{
        normal: '#ff7d00',
        //light: '#ff7d00',
        deep: '#141414',
        dark: '#1e1e1e',
        darker:'#2c2c2c',
        black:'#151515'
    },
    gray:{
        white:'#fff',
        gray1: '#485b63',
        gray2:'#a4adb1',
        gray3: '#c8ced0',
        gray4: '#edefef'
    },
    curves:{
        full: 400,
        sm:5,
        md:12,
        lg:18,
        xl:24,
        xxl:30,
        round:50,
    },
    plum:{
        normal:"#8a107a",
        light:'#c271b8',
        deep:'#5c0b52',
        dark: '#45083d',
        darker:'#370631',
        xdarker: '#290525'
    },
    transparent:{
        light: (opacity:number)=>{return `rgba(225,225,225,${opacity})`},
        
    }
}