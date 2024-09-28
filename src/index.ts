/// <reference types="../node_modules/@types/tampermonkey/index.d.ts" />
// ==UserScript==
// @name         获取 著作权人 信息
// @version      2024-09-27
// @description  try to take over the world!
// @author       Godxu
// @match        *://ars.cpcccac.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.2.nomodule.min.js
// ==/UserScript==

declare const van: {
    tags: any
    add(element: HTMLElement, ...args: any[]): any
    state(value: any): any
}

const { div, h1, span, button, a, style } = van.tags
const { svg, path } = van.tags('http://www.w3.org/2000/svg')

const FixedBtn = () => {
    return div({
        class: 'fixed_btn',
    }, svg({ "t": "1727459696044", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "961", width: "28", height: "28" },
        path({ "d": "M428.957 62.502v417.092H12V62.502z", fill: "#A1D06B", "p-id": "962" }),
        path({ "d": "M428.957 583.908V1001H12V583.908z", fill: "#19A15F", "p-id": "963" }),
        path({ "d": "M961.35 593.908V1011H544.393V593.908z", fill: "#7FB546", "p-id": "964" }),
        path({ "d": "M985.266 437.065l-70.08-69.925c22.572-34.993 35.693-76.587 35.693-121.356C950.879 122.124 850.888 22 727.39 22c-123.496 0-223.487 100.248-223.487 223.784 0 123.66 99.99 223.784 223.487 223.784 44.772 0 86.497-13.2 121.445-35.865l69.956 69.8c19.899 19.863 50.928 21.108 69.273 2.802 18.281-18.307 17.038-49.377-2.799-69.24z m-258-41.967c-82.206 0-148.99-66.75-148.99-149.19 0-82.315 66.66-149.189 148.99-149.189 82.332 0 148.993 66.75 148.993 149.19-0.125 82.44-66.786 149.189-148.992 149.189z", fill: "#19A15F", "p-id": "965" }),
    ))
}

const GetBtn = () => {
    return div({
        class: 'hover_btn',
    }, svg({ "t": "1727460924751", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "1252", width: "44", height: "44" },
        path({ "d": "M0 0m180.705882 0l662.588236 0q180.705882 0 180.705882 180.705882l0 662.588236q0 180.705882-180.705882 180.705882l-662.588236 0q-180.705882 0-180.705882-180.705882l0-662.588236q0-180.705882 180.705882-180.705882Z", fill: "#FF4848", "p-id": "1253" }),
        path({ "d": "M180.705882 525.793882h110.652236a221.274353 221.274353 0 0 0 206.787764 206.757647v110.682353A331.806118 331.806118 0 0 1 180.705882 525.793882z m317.470118 151.461647a167.002353 167.002353 0 0 1-151.491765-151.461647h112.097883a54.302118 54.302118 0 0 0 39.393882 39.424v112.037647z m0-218.473411c-19.275294 5.12-34.334118 20.148706-39.393882 39.424h-112.067765a166.972235 166.972235 0 0 1 151.491765-151.461647v112.037647z m0-167.363765a221.274353 221.274353 0 0 0-206.787765 206.757647H180.705882A331.806118 331.806118 0 0 1 498.206118 180.705882v110.712471zM525.854118 843.294118v-110.712471a221.274353 221.274353 0 0 0 206.787764-206.787765H843.294118a331.233882 331.233882 0 0 1-317.44 317.44V843.294118z m0-165.978353v-111.435294a54.934588 54.934588 0 0 0 40.086588-40.056471h111.375059a167.002353 167.002353 0 0 1-151.461647 151.431529v0.060236z", fill: "#FFFFFF", "p-id": "1254" }),
        path({ "d": "M728.154353 511.969882a227.990588 227.990588 0 0 0-18.010353-76.348235 85.232941 85.232941 0 0 1-49.543529 31.683765c5.210353 14.426353 8.613647 29.424941 10.119529 44.694588h-116.254118a57.103059 57.103059 0 0 0-9.33647-18.733176l42.375529-42.465883a112.609882 112.609882 0 0 1-19.365647-21.684706l-45.327059 45.44753a47.043765 47.043765 0 0 0-10.812235-3.614118v-116.705882h0.783059a175.284706 175.284706 0 0 1 44.574117 10.179764 85.473882 85.473882 0 0 1 31.62353-49.694117 246.000941 246.000941 0 0 0-76.137412-18.703059V180.705882c79.811765 3.312941 155.979294 34.364235 215.43153 87.853177l-40.96 41.773176c8.372706 5.089882 15.661176 11.655529 21.62447 19.425883l40.237177-40.32753A344.545882 344.545882 0 0 1 843.294118 512h-115.139765z", fill: "#FFFFFF", opacity: ".5", "p-id": "1255" }),
    ))
}

const SuccessMessageBox = () => {
    return div({
        class: 'success_message_box',
    },
        div({
            style: `
                margin-right: 10px;
                height: 30px;
                margin-top: 14px;
            `,
        },
            svg({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", width: "1em", height: "1em" },
                path({ fill: "#67C23A", "d": "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z" }
                ),
            )
        ),
        '著作权人信息复制成功'
    )
}

const all_style = `
    .success_message_box {
        position: fixed;
        width: 216px;
        height: 42px;
        background-color: cadetblue;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        color: #67C23A;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e1f3d8;
        border: 1px solid #d1edc4;
        opacity: 0;
        transition: all 0.3s;
        z-index: 9999;
        font-size: 16px;
    }

    .fixed_btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 9999;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: #FFFFFF;
        padding: 10px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
        transition: all 0.2s;
    }

    .hover_btn {
        position: fixed;
        bottom: 96px;
        right: 32px;
        z-index: 9999;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
        transition: all 0.2s;
    }

    .fixed_btn:hover {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .3) !important;
    }

    .hover_btn:hover {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .3) !important;
    }

    .show {
        top: 20px;
        opacity: 1;
    }
`

;(function () {
    van.add(document.body,
        style(all_style),
        SuccessMessageBox(),
        FixedBtn(),
        GetBtn(),
    )
    const hoverBtn = document.querySelector('.hover_btn')
    if (hoverBtn) {
        hoverBtn.addEventListener('click', () => {
            const flowCodeBox = document.querySelector("div.el-dialog__wrapper > div > div.el-dialog__body > div > div:nth-child(1) > div.value")
            const r11NameBox = document.querySelector("div.el-dialog__body > div > div:nth-child(2) > div.value")
            const userList = [...document.querySelectorAll('.titleTxt')].map(x => x.textContent).filter(x => x) as string[]
            const SuccessMessageBox = document.querySelector('.success_message_box')
            if (userList.length === 0) return
            if (!flowCodeBox || !r11NameBox) return
            let r11Info = {
                'flowCode': flowCodeBox.textContent,
                'r11Name': r11NameBox.textContent,
                'userList': userList
            }
            let copyText = '流水号:' + r11Info.flowCode + '\n' + r11Info.r11Name + '\n' + r11Info.userList.join(' ')
            navigator.clipboard.writeText(copyText).then(() => {
                // alert('复制成功\n' + copyText)
                if (SuccessMessageBox) {
                    SuccessMessageBox.classList.toggle('show')
                    setTimeout(() => {
                        SuccessMessageBox.classList.toggle('show')
                    }, 3000)
                }
            }).catch((err) => {
                alert('复制失败\n' + err)
            })
        })
    }
})()