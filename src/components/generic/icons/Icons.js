import React from 'react'

const Icons = ({ icon, color = "#000", width, heigth }) => {
    if (icon === "tesla") {
        return (
            <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 278.7 36.3"
                width={width}
                height={heigth}
            >
                <g id="TESLA">
                    <path
                        style={{ fill: color }}
                        d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"
                    />
                    <g>
                        <path
                            style={{ fill: color }}
                            d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
                        />
                    </g>
                </g>
            </svg>
        )
    }
    if (icon === 'microsoft') {
        return (
            <svg
                viewBox="0 0 603.9000000000002 129"
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={heigth}
            >
                <path
                    d="M213.2 74.3l-3.6 10.2h-.3c-.6-2.3-1.7-5.8-3.5-10L186.5 26h-18.9v77.3h12.5V55.6c0-3 0-6.4-.1-10.6-.1-2.1-.3-3.7-.4-4.9h.3c.6 3 1.3 5.2 1.8 6.6l23.2 56.4h8.8l23-56.9c.5-1.3 1-3.9 1.5-6.1h.3c-.3 5.7-.5 10.8-.6 13.9v49h13.3V25.8H233zm50.6-26.7h13V103h-13zm6.6-23.4c-2.2 0-4 .8-5.5 2.2s-2.3 3.2-2.3 5.4c0 2.1.8 3.9 2.3 5.3s3.3 2.1 5.5 2.1 4.1-.8 5.5-2.1c1.5-1.4 2.3-3.2 2.3-5.3s-.8-3.9-2.3-5.4c-1.3-1.4-3.2-2.2-5.5-2.2m52.5 22.9c-2.4-.5-4.9-.8-7.3-.8-5.9 0-11.3 1.3-15.8 3.9s-8.1 6.2-10.4 10.7c-2.4 4.6-3.6 9.9-3.6 16 0 5.3 1.2 10 3.5 14.3 2.3 4.2 5.5 7.6 9.8 9.9 4.1 2.3 8.9 3.5 14.3 3.5 6.2 0 11.5-1.3 15.7-3.7l.1-.1v-12l-.5.4c-1.9 1.4-4.1 2.6-6.3 3.3-2.3.8-4.4 1.2-6.2 1.2-5.2 0-9.3-1.5-12.2-4.8-3-3.2-4.5-7.6-4.5-13.1 0-5.7 1.5-10.2 4.6-13.5s7.2-5 12.2-5c4.2 0 8.5 1.4 12.4 4.2l.5.4V49.2l-.1-.1c-1.7-.7-3.6-1.5-6.2-2m42.9-.4c-3.2 0-6.2 1-8.8 3.1-2.2 1.8-3.7 4.4-5 7.5h-.1v-9.7h-13V103h13V74.7c0-4.8 1-8.8 3.2-11.7 2.2-3 5-4.5 8.4-4.5 1.2 0 2.4.3 3.9.5 1.4.4 2.4.8 3.1 1.3l.5.4v-13l-.3-.1c-.9-.6-2.7-.9-4.9-.9m35.4-.3c-9.1 0-16.4 2.7-21.5 8-5.2 5.3-7.7 12.6-7.7 21.8 0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6M411.6 89c-2.4 3.1-6.2 4.6-10.9 4.6s-8.5-1.5-11.2-4.8c-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.6 0 8.2 1.5 10.8 4.6s4 7.6 4 13.5c-.2 6-1.3 10.7-3.8 13.8m46.1-18.4c-4.1-1.7-6.7-3-7.9-4.1-1-1-1.5-2.4-1.5-4.2 0-1.5.6-3 2.1-4s3.2-1.5 5.7-1.5c2.2 0 4.5.4 6.7 1s4.2 1.5 5.8 2.7l.5.4V48.7l-.3-.1c-1.5-.6-3.5-1.2-5.9-1.7-2.4-.4-4.6-.6-6.4-.6-6.2 0-11.3 1.5-15.3 4.8-4 3.1-5.9 7.3-5.9 12.2 0 2.6.4 4.9 1.3 6.8s2.2 3.7 4 5.2c1.8 1.4 4.4 3 8 4.5 3 1.3 5.3 2.3 6.7 3.1s2.3 1.7 3 2.4c.5.8.8 1.8.8 3.1 0 3.7-2.8 5.5-8.5 5.5-2.2 0-4.5-.4-7.2-1.3s-5.2-2.2-7.3-3.7l-.5-.4v12.7l.3.1c1.9.9 4.2 1.5 7 2.2 2.8.5 5.3.9 7.5.9 6.7 0 12.2-1.5 16.1-4.8 4-3.2 6.1-7.3 6.1-12.6 0-3.7-1-7-3.2-9.5-2.9-2.4-6.5-4.9-11.7-6.9m49.2-24.2c-9.1 0-16.4 2.7-21.5 8s-7.7 12.6-7.7 21.8c0 8.6 2.6 15.6 7.6 20.7 5 5 11.8 7.6 20.3 7.6 8.9 0 16-2.7 21.1-8.1 5.2-5.4 7.7-12.6 7.7-21.5 0-8.8-2.4-15.8-7.3-20.9-4.7-5.1-11.6-7.6-20.2-7.6M517.2 89c-2.4 3.1-6.2 4.6-10.9 4.6-4.8 0-8.5-1.5-11.2-4.8-2.7-3.1-4-7.6-4-13.3 0-5.9 1.4-10.4 4-13.6 2.7-3.2 6.4-4.8 11.1-4.8 4.5 0 8.2 1.5 10.8 4.6s4 7.6 4 13.5c0 6-1.3 10.7-3.8 13.8m86.7-30.7V47.6h-13.1V31.2l-.4.1L578 35l-.3.1v12.5h-19.6v-7c0-3.2.8-5.7 2.2-7.3s3.5-2.4 6.1-2.4c1.8 0 3.7.4 5.8 1.3l.5.3V21.2l-.3-.1c-1.8-.6-4.2-1-7.3-1-3.9 0-7.3.9-10.4 2.4-3.1 1.7-5.4 4-7.1 7.1-1.7 3-2.6 6.4-2.6 10.3v7.7h-9.1v10.6h9.1V103h13.1V58.3h19.6v28.5c0 11.7 5.5 17.6 16.5 17.6 1.8 0 3.7-.3 5.5-.6 1.9-.4 3.3-.9 4.1-1.3l.1-.1V91.7l-.5.4c-.8.5-1.5.9-2.7 1.2-1 .3-1.9.4-2.6.4-2.6 0-4.4-.6-5.7-2.1-1.2-1.4-1.8-3.7-1.8-7.1V58.3h13.3z"
                    fill={color}
                />
                <path d="M0 0h61.3v61.3H0z" fill={color} />
                <path d="M67.7 0H129v61.3H67.7z" fill={color} />
                <path d="M0 67.7h61.3V129H0z" fill={color} />
                <path d="M67.7 67.7H129V129H67.7z" fill={color} />
            </svg>
        )
    }
    if (icon === 'hp') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={heigth}
                viewBox="0 0 192.744 192.744"
            >
                <g fillRule="evenodd" clipRule="evenodd">
                    <path fill={color} d="M0 0h192.744v192.744H0V0z" />
                    <path d="M19.124 103.109l8.484-24.421h3.645L27.482 89.47h2.137c2.2 0 3.331.943 2.766 2.829-.566 1.886-3.771 10.811-3.771 10.811h-3.708l3.708-10.56c.125-.629.125-1.194-.628-1.194h-1.131l-4.148 11.754h-3.583v-.001zM41.698 89.408h-5.865l-8.451 24.553h3.595l3.747-10.855h3.316c2.649 0 3.091-1.01 3.595-2.462l2.712-7.701c.946-2.588-.884-3.535-2.649-3.535zm-1.009 2.841s-2.649 7.511-2.712 7.89c-.063.379-.379 1.073-1.009 1.073h-1.591l3.42-9.91h1.577c.567 0 .504.442.315.947z" />
                    <path d="M26.13 110.769c-6.538-2.104-11.238-7.893-11.238-14.452 0-5.766 4.082-11.585 9.531-14.478l1.132-3.15H7.504a4.718 4.718 0 0 0-4.711 4.721v25.814c0 2.604 2.109 4.737 4.711 4.737h17.485l1.141-3.192zM33.33 78.688h22.191c2.607 0 4.722 2.075 4.722 4.686v25.885a4.704 4.704 0 0 1-4.722 4.702H33.204l.95-2.847c7.918-1.167 13.961-7.348 13.961-14.798 0-8.015-6.994-14.562-15.793-14.975l1.008-2.653zM178.592 100.203h-10.311v13.9h10.248c3.711 0 3.961-3.585 3.961-5.535v-4.088c0-2.453-1.258-4.277-3.898-4.277zm.691 4.78v3.963c0 1.194-.629 2.264-1.76 2.264h-6.037v-8.113h6.289c.944 0 1.573 1.007 1.508 1.886zM163.854 108.7c.758-.632 1.262-1.578 1.262-4.103 0-2.84-1.955-4.418-4.225-4.418h-9.271v13.948h3.154v-4.103h5.422c1.262 0 1.893 1.01 1.893 1.578v2.524h3.027v-2.903c0-.82-.253-2.018-1.262-2.523zm-3.28-1.578h-5.801v-4.039h5.422c1.578 0 1.893 1.198 1.893 1.894 0 .693-.315 2.145-1.514 2.145zM142.857 100.206h-4.148l-5.594 11.945v1.949h2.514l1.131-2.515h8.033l1.145 2.515h3.27l-6.351-13.894zm-4.777 8.488l2.703-5.91 2.691 5.91h-5.394zM118.533 114.115v-13.923h3.213v5.229h1.385l5.478-5.229h4.282l-6.739 6.552 5.604 5.544v1.827h-2.393l-5.98-5.797h-1.637v5.797h-3.213zM101.66 103.479v7.348c0 1.444.879 3.266 3.266 3.266h7.662c1.758 0 3.201-1.193 3.201-3.266v-1.256h-3.139c0 .628-.127 1.633-1.32 1.633h-5.463c-.377 0-1.004-.251-1.004-1.256v-5.526s-.189-1.256 1.066-1.256h5.527c.502 0 1.066.941 1.131 1.569h3.201v-1.192c0-1.193-1.191-3.267-3.201-3.329h-7.725c-1.507 0-3.202 1.696-3.202 3.265zM93.882 100.179H89.72l-6.496 13.949h3.405l1.136-2.524h8.058l1.149 2.524h3.28l-6.37-13.949zm-4.793 8.521l2.711-5.934 2.649 5.934h-5.36zM79.623 100.2H69.495v13.907h3.208v-3.902h6.919c1.887 0 4.026-1.069 4.026-4.971.001-3.964-2.327-5.034-4.025-5.034zm-.755 7.111h-6.165v-4.216h5.976c1.573 0 1.573 1.511 1.573 2.14s0 2.076-1.384 2.076zM69.495 78.916v13.907h3.208v-5.538h8.366v5.538h3.208V78.916h-3.208v5.475h-8.366v-5.475h-3.208zM100.484 78.907H89.779c-1.449 0-2.204.819-2.204 2.08v10.019c0 .819.755 1.827 2.015 1.827h10.894v-2.898h-9.698v-2.646h8.061v-2.898h-8.061v-2.583h9.698v-2.901zM126.332 78.921v11.822c0 1.069.818 2.075 2.264 2.075h9.432v-2.893h-8.488V78.921h-3.208zM162.861 92.833V81.805h4.694v-2.9H155.02v2.9h4.63v11.028h3.211zM177.715 92.842V81.799h4.697v-2.903h-12.547v2.903h4.635v11.043h3.215zM152.666 78.913h-10.697c-1.449 0-2.203.818-2.203 2.078V91c0 .819.754 1.826 2.014 1.826h10.887V89.93h-9.691v-2.644h8.055V84.39h-8.055v-2.582h9.691v-2.895h-.001zM117.568 92.847c-.947 0-1.861-1.42-2.051-2.115l-2.365-7.293-3.092 9.409h-1.955c-.947 0-1.768-1.452-1.957-2.146L102.3 78.893h3.217l2.967 9.535 3.154-9.472h3.027l3.154 9.472 2.965-9.535h3.219l-4.543 13.955h-1.892v-.001zM188.967 79.72a3.022 3.022 0 0 0-2.209-.909c-.859 0-1.59.304-2.197.909a3.007 3.007 0 0 0-.912 2.201c0 .867.301 1.604.904 2.213.605.612 1.34.917 2.205.917.863 0 1.6-.306 2.209-.917a3.029 3.029 0 0 0 .912-2.213c0-.861-.305-1.595-.912-2.201zm-.311 4.112a2.573 2.573 0 0 1-1.898.79 2.567 2.567 0 0 1-1.898-.79 2.62 2.62 0 0 1-.777-1.912c0-.742.26-1.375.781-1.899.523-.526 1.154-.79 1.895-.79s1.375.264 1.898.79c.521.524.781 1.157.781 1.899 0 .748-.26 1.385-.782 1.912z" />
                    <path d="M188.146 83.581a.575.575 0 0 1-.029-.179 3.869 3.869 0 0 1-.01-.254v-.25a.94.94 0 0 0-.186-.531c-.125-.181-.322-.293-.592-.335a1.3 1.3 0 0 0 .498-.166c.223-.145.336-.37.336-.676 0-.43-.178-.719-.531-.866-.199-.082-.51-.123-.936-.123H185.5v3.423h.604v-1.351h.475c.32 0 .545.037.672.11.215.127.322.39.322.786v.272l.014.111.008.038a.187.187 0 0 1 .008.034h.566l-.023-.043zm-.925-1.805c-.127.051-.318.077-.574.077h-.543v-1.241h.514c.334 0 .576.042.729.127.15.085.227.252.227.501-.002.264-.119.443-.353.536z" />
                </g>
            </svg>

        )
    }
    if (icon === "moneyBag") {
        return (
            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.3 25.6C42.5 27.1 41 28.1 39.2 28.1H24.9C23.1 28.1 21.5 27.1 20.8 25.6C15.2 29.3 11.7 35.7 11.7 42.6C11.6 63 21.5 63 32 63C42.5 63 52.4 63 52.4 42.6C52.4 35.7 48.9 29.3 43.3 25.6ZM36.2 50.5C35.4 51.3 34.4 51.7 33 51.9V54H31.2V51.8C29.7 51.6 28.6 51.1 27.8 50.2C27 49.3 26.6 48.1 26.6 46.7H29.3C29.3 47.6 29.5 48.4 30 48.9C30.5 49.4 31.1 49.7 32 49.7C32.8 49.7 33.5 49.5 33.9 49.1C34.3 48.7 34.6 48.2 34.6 47.5C34.6 46.9 34.4 46.3 34 45.9C33.6 45.5 32.9 45.1 32 44.8C31.1 44.5 30.3 44.2 29.8 43.9C28.1 43 27.2 41.6 27.2 39.8C27.2 38.6 27.6 37.6 28.3 36.8C29.1 36 30.1 35.5 31.4 35.4V33H33.2V35.5C34.5 35.7 35.5 36.2 36.2 37.1C36.9 38 37.3 39.2 37.3 40.6H34.6C34.6 39.7 34.4 38.9 34 38.4C33.6 37.9 33 37.6 32.3 37.6C31.6 37.6 31 37.8 30.6 38.2C30.2 38.4 30 39 30 39.7C30 40.3 30.2 40.9 30.6 41.2C31 41.6 31.7 42 32.6 42.3C33.5 42.6 34.3 43 34.8 43.3C35.3 43.6 35.8 43.9 36.2 44.3C36.6 44.7 36.9 45.1 37.1 45.6C37.3 46.1 37.4 46.7 37.4 47.4C37.4 48.7 37 49.7 36.2 50.5Z" fill="white" />
                <path d="M41.9 20.1V23.5C41.9 25 40.7 26.2 39.2 26.2H24.9C23.4 26.2 22.2 25 22.2 23.5V20.1C22.2 18.6 23.4 17.4 24.9 17.4H39.2C40.6 17.4 41.9 18.6 41.9 20.1ZM45.9 2.3L40.8 15.8C40.3 15.6 39.7 15.5 39.1 15.5H24.9C24.3 15.5 23.7 15.6 23.2 15.8L18.1 2.3C17.9 1.9 18.1 1.4 18.5 1.1C18.9 0.8 19.4 0.9 19.7 1.2L22.6 4.2C24 5.6 25.6 6.3 27.1 6.1C28.3 6 29.3 5.3 30 4.1V4C30.4 3.2 31.2 2.7 32.1 2.7C33 2.7 33.8 3.2 34.2 4L34.4 4.3C35 5.5 36 6.2 37.3 6.3C38.9 6.5 40.6 5.7 42 4C43.3 2.5 44.3 1.3 44.3 1.3C44.6 0.9 45.1 0.8 45.5 1.1C45.9 1.4 46.1 1.9 45.9 2.3Z" fill="white" />
            </svg>
        )
    }
    if (icon === 'graph'){
        return (
            <svg width={50} height={44} viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8 21.8H2.7C1.2 21.8 0 23 0 24.5V40.9C0 42.4 1.2 43.6 2.7 43.6H10.8C12.3 43.6 13.5 42.4 13.5 40.9V24.5C13.5 23 12.3 21.8 10.8 21.8ZM29.1 15.5H21C19.5 15.5 18.3 16.7 18.3 18.2V40.9C18.3 42.4 19.5 43.6 21 43.6H29.1C30.6 43.6 31.8 42.4 31.8 40.9V18.2C31.7 16.7 30.5 15.5 29.1 15.5ZM47.3 0.5H39.2C37.7 0.5 36.5 1.7 36.5 3.2V40.9C36.5 42.4 37.7 43.6 39.2 43.6H47.3C48.8 43.6 50 42.4 50 40.9V3.1C50 1.7 48.8 0.5 47.3 0.5Z" fill="white" />
            </svg>
        )
    }
    if (icon === "creditCard"){
        return (
            <svg width={70} height={70} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.8 34.4H26.4C23 34.4 20.2 37.2 20.2 40.6V47.4C20.2 48 20.7 48.5 21.3 48.5H93.9C94.5 48.5 95 48 95 47.4V40.6C95 37.1 92.2 34.4 88.8 34.4ZM93.9 54.7H21.3C20.7 54.7 20.2 55.2 20.2 55.8V77.1C20.2 80.5 23 83.3 26.4 83.3H88.8C92.2 83.3 95 80.5 95 77.1V55.8C95 55.2 94.5 54.7 93.9 54.7ZM40.5 72.3C40.5 72.6 40.2 72.9 39.9 72.9H30.5C30.2 72.9 29.9 72.6 29.9 72.3V62.9C29.9 62.6 30.2 62.3 30.5 62.3H39.9C40.2 62.3 40.5 62.6 40.5 62.9V72.3Z" fill="white" />
                <path d="M11.2 64.5H14.9C15.3 64.5 15.6 64.2 15.6 63.8V38.8C15.6 33.7 19.7 29.6 24.8 29.6H79.1C79.5 29.6 79.8 29.3 79.8 28.9V22.8C79.8 19.4 77 16.6 73.6 16.6H14.2C9.1 16.6 5 20.7 5 25.8V58.2C5 61.7 7.8 64.5 11.2 64.5Z" fill="white" />
            </svg>
        )
    }
    if (icon === "facebook"){
        return (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.446 18.627 0.072998 12 0.072998C5.373 0.072998 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.339 7.949 13.874 8.874 13.874 9.823V12.073H17.202L16.67 15.543H13.874V23.928C19.612 23.027 24 18.062 24 12.073Z" fill="white" />
            </svg>
        )
    }
    if (icon === 'twitter'){
        return (
            <svg width={24} height={20} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 2.57C23.0545 2.96561 22.1026 3.22674 21.128 3.345C22.1541 2.72825 22.9224 1.76105 23.291 0.622C22.34 1.177 21.286 1.581 20.164 1.806C19.4238 1.01443 18.4429 0.489421 17.3736 0.312501C16.3044 0.135581 15.2067 0.31665 14.2509 0.827591C13.2952 1.33853 12.5349 2.15075 12.0881 3.13812C11.6412 4.1255 11.533 5.23277 11.78 6.288C7.69 6.095 4.067 4.13 1.64 1.162C1.19879 1.91181 0.968664 2.76703 0.974 3.637C0.974 5.347 1.844 6.85 3.162 7.733C2.38086 7.70814 1.61697 7.49693 0.934 7.117V7.177C0.933557 8.31339 1.32627 9.41494 2.04551 10.2948C2.76474 11.1746 3.76621 11.7785 4.88 12.004C4.1583 12.1974 3.40241 12.2264 2.668 12.089C2.98412 13.067 3.59766 13.9219 4.42301 14.5345C5.24837 15.1471 6.24435 15.4867 7.272 15.506C5.53153 16.8719 3.38248 17.6133 1.17 17.611C0.78 17.611 0.391 17.588 0 17.544C2.25571 18.9883 4.87851 19.755 7.557 19.753C16.61 19.753 21.555 12.257 21.555 5.768C21.555 5.558 21.555 5.348 21.54 5.138C22.506 4.44286 23.3392 3.57982 24 2.59L23.953 2.57Z" fill="white" />
            </svg>
        )
    }
    if (icon === "linkedin"){
        return (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white" />
            </svg>
        )
    }
    if (icon === "paypal"){
        return (
            <svg width={50} height={50} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07601 21.337H1.47001C1.37748 21.337 1.28607 21.3169 1.20204 21.2782C1.11801 21.2394 1.04336 21.183 0.983214 21.1127C0.923071 21.0424 0.878862 20.9599 0.853624 20.8708C0.828385 20.7818 0.822717 20.6884 0.837006 20.597L3.94401 0.901C4.02601 0.382 4.47401 0 4.99801 0H12.458C15.028 0 17.036 0.543 18.148 1.81C19.158 2.96 19.452 4.23 19.16 6.097C19.137 6.24 19.113 6.385 19.083 6.534C18.1 11.584 14.734 13.331 10.436 13.331H8.24601C7.72201 13.331 7.27801 13.713 7.19601 14.231L6.07601 21.337V21.337ZM20.222 6.917C20.0424 6.71269 19.8386 6.53102 19.615 6.376C19.602 6.452 19.589 6.551 19.574 6.63C18.644 11.408 15.569 13.831 10.436 13.831H8.24601C8.11137 13.8312 7.98124 13.8796 7.87924 13.9675C7.77723 14.0553 7.71009 14.1769 7.69001 14.31L6.50301 21.837H5.99701L5.75701 23.353C5.74443 23.433 5.74934 23.5147 5.77141 23.5926C5.79348 23.6705 5.83218 23.7427 5.88484 23.8042C5.9375 23.8657 6.00287 23.9151 6.07644 23.9489C6.15001 23.9827 6.23004 24.0001 6.31101 24H10.193C10.653 24 11.043 23.666 11.115 23.212C11.175 22.952 11.875 18.36 11.931 18.122C11.9654 17.9021 12.0774 17.7017 12.2467 17.5572C12.416 17.4126 12.6314 17.3335 12.854 17.334H13.434C17.194 17.334 20.139 15.806 20.999 11.388C21.359 9.541 21.173 8 20.222 6.917Z" fill="white" />
            </svg>
        )
    }
}

export default Icons
