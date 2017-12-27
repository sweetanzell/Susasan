import {css} from 'styled-components';
import Imageviewmore from '../../../assets/images/ic_view-more.svg';
import Imagesprite from '../../../assets/images/ic_sprite.svg';


const base = css`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700&subset=devanagari');

body {
    font: 16px/1.5 'Noto Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
}

p {
    margin-bottom: 10px;
}

a {
    color: #014983;
}

button {
    cursor: pointer;
}

h2 {
    color: #F0F8FF;
    font-size: 37px;
    margin-bottom: 12px;
}

h3 {    
    font-size: 28px;
}

table {
    width: 100%;
    tbody tr {
        border-top: 1px solid #F0F8FF;
        td {
            padding: 12px;
        }
    }
    th {
        font-weight: 700;
        padding: 12px;
        text-align: left;
    }
    table tr {
        border: 0;
    }
    strong {
        font-weight: 700;
    }
}

.component__type {
    color: #F0F8FF;
    height: 100%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    width: 60%;
    h2 {
        font-size: 28px;
        font-weight: bold;
        line-height: 36px;
        margin-bottom: 20px;
    }
    .view--more {
        bottom: 0;
        filter: brightness(0) invert(1);
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }
}   

.view--more {
    background: url(${Imageviewmore}) no-repeat; 
    display: inline-block;
    height: 29px;
    text-indent: -9999px;
    width: 29px;
}

.view--more--info {
    color: #014983;
    font-size: 16px;
    padding-right: 40px;
    position: relative;
    text-decoration: none;
    &:after {
         background: url(${Imageviewmore}) no-repeat 0 -28px; 
         content: "";
         height: 29px;
         right: 0;
         position: absolute;
         top: 0;
         width: 29px;
    }
}

.download {
    color: #F0F8FF;
    position: relative;
    text-decoration: none;
    &:before {
        background: url(${Imageviewmore}) no-repeat 0 0; 
         content: "";
         filter: brightness(0) invert(1);
         height: 29px;
         left: -35px;
         position: absolute;
         top: -4px;
         transform: rotate(90deg);
         width: 29px;
    }
}

.external-link {
    display: block;
    background: url(${Imagesprite}) no-repeat 0 -36px; 
    content: "";
    height: 24px;
    position: absolute;
    right: 4px;
    text-indent: -9999px;
    top: 130px;
    width: 24px;
}


.print {
    display: inline-block;
    position: relative;
    text-indent: -9999px;
    &:before {
        background: url(${Imagesprite}) no-repeat 0 0; 
         content: "";
         height: 24px;
         left: -35px;
         position: absolute;
         top: 0;
         width: 24px;
    }
}

.social-links {
    margin-top: -200px;
    > div {
        position: relative;
    }
    a {
        background: url(${Imagesprite}) no-repeat 0 0; ;
        display: inline-block;
        height: 36px;
        text-indent: -9999px;
        width: 36px;
        &.facebook {
            background-position: -86px -1px;
        }
        &.twitter {
            background-position:  -86px -51px;
        }
        &.website {
            background-position:  -86px -101px;
        }
    }
}

.list__wrap {
    h3 {
        margin-bottom: 12px;
    }
    ul,ol {
        padding-left: 20px;
        li {
            list-style-type: disc;
        }
    }
}
`;

export default base;