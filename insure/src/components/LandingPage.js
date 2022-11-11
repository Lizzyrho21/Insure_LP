import React from 'react'
import '../landing-page.css';
import familyPic from '../images/image-intro-mobile.jpg'

const LandingPage = () => {
  return (
    <div className="main-container">

        <header className="header">
<svg className="grid--items logo" xmlns="http://www.w3.org/2000/svg" width="112" height="18"><path fill="#2C2830" d="M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z"/></svg>

<svg className="grid--items menu" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" stroke="#2C2830" stroke-width="1.5" d="M.75.75h30.5v30.5H.75z"/><g fill="#2C2830"><path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z"/></g></g></svg>

        </header>

        <img className="main-img" src={familyPic}  alt="friendly family walking together in a row"/>

        {/* <div className="section main-img-section">
        </div> */}

        <div className="section sub-section-heading">
<svg className="left-side-mobile-design"  xmlns="http://www.w3.org/2000/svg" width="168" height="165"><g fill="none" fill-rule="evenodd" stroke="#96A9C6"><path d="M-20.97-256.987c-52.677-16.501-106.841-44.025-162.294 6.247-55.453 50.272-90.316 94.31-67.803 151.29 22.514 56.979 114.411 21.488 141.113 72.415 26.7 50.926-31.968 97.145-6.674 142.469 25.293 45.324 44.742 74.373 126.027 45.554C90.684 132.17 83.189 58.843 145.002 15.904c61.814-42.94 128.692-107.221 36.912-221.924-91.78-114.702-150.207-34.465-202.884-50.967z"/><path d="M-13.955-230.22c-42.902-13.399-87.015-35.746-132.178 5.072-45.163 40.818-73.556 76.574-55.22 122.838 18.335 46.265 93.18 17.449 114.926 58.798 21.747 41.349-26.035 78.877-5.435 115.677 20.6 36.801 36.44 60.387 102.64 36.988 66.201-23.399 60.098-82.937 110.44-117.8 50.343-34.865 104.81-87.059 30.062-180.19C76.532-281.97 28.947-216.823-13.955-230.22z"/><path d="M-1.61-212.607c-34.755-10.916-70.492-29.123-107.08 4.132-36.587 33.255-59.59 62.386-44.735 100.078 14.854 37.693 75.487 14.216 93.105 47.903 17.617 33.688-21.092 64.263-4.404 94.245 16.689 29.982 29.52 49.197 83.152 30.134 53.631-19.064 48.686-67.57 89.47-95.974 40.785-28.405 84.91-70.927 24.355-146.803-60.556-75.876-99.106-22.8-133.862-33.715z"/><path d="M11.09-190.546c-28.022-8.762-56.835-23.376-86.334 3.317-29.498 26.693-48.044 50.076-36.068 80.33 11.976 30.255 60.862 11.41 75.066 38.451 14.204 27.04-17.005 51.582-3.55 75.647 13.455 24.066 23.8 39.49 67.041 24.188 43.24-15.301 39.253-54.236 72.136-77.035 32.882-22.8 68.458-56.932 19.635-117.836-48.823-60.904-79.904-18.3-107.926-27.062z"/><path d="M14.12-176.738c-22.917-7.155-46.481-19.09-70.606 2.71-24.125 21.799-39.292 40.895-29.498 65.602 9.795 24.708 49.775 9.319 61.391 31.402C-12.976-54.941-38.5-34.9-27.496-15.245-16.492 4.408-8.031 17.005 27.332 4.508 62.695-7.988 59.435-39.785 86.327-58.405c26.892-18.62 55.987-46.494 16.058-96.232s-65.348-14.945-88.265-22.1z"/></g></svg>

            <h1>
                Humanizing
            </h1>
            <h1>Your Insurance.</h1>

            <p>
            Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.
            </p>
            <button className="--btn veiwplans--btn">View Plans</button>
<svg className="right-side-mobile-design" xmlns="http://www.w3.org/2000/svg" width="124" height="330"><g fill="none" fill-rule="evenodd" stroke="#9E96C6"><path d="M185.248 17.983c-40.947-12.815-83.05-34.188-126.155 4.85C15.99 61.874-11.11 96.07 6.39 140.318c17.5 44.247 88.934 16.687 109.69 56.234 20.755 39.547-24.85 75.438-5.188 110.635 19.661 35.196 34.779 57.753 97.963 35.374 63.185-22.378 57.359-79.32 105.408-112.665 48.048-33.344 100.034-83.262 28.692-172.334-71.342-89.072-116.76-26.764-157.706-39.578z"/><path d="M190.037 40.695c-33.343-10.405-67.629-27.759-102.73 3.94-35.101 31.697-57.17 59.464-42.918 95.392 14.25 35.927 72.42 13.55 89.322 45.66s-20.235 61.253-4.224 89.831c16.01 28.578 28.321 46.894 79.774 28.723 51.452-18.17 46.708-64.405 85.835-91.48 39.128-27.074 81.46-67.606 23.365-139.93-58.096-72.323-95.08-21.73-128.424-32.136z"/><path d="M200.203 54.055c-26.936-8.47-54.632-22.596-82.988 3.207-28.355 25.803-46.182 48.407-34.67 77.653 11.512 29.246 58.503 11.03 72.157 37.169 13.653 26.139-16.347 49.862-3.413 73.126 12.934 23.263 22.878 38.173 64.443 23.381 41.564-14.791 37.732-52.428 69.34-74.468 31.607-22.04 65.804-55.034 18.874-113.907-46.93-58.874-76.807-17.69-103.743-26.16z"/><path d="M210.233 71.814c-21.831-6.827-44.279-18.214-67.26 2.585-22.982 20.798-37.43 39.017-28.1 62.59 9.33 23.574 47.416 8.89 58.482 29.96 11.066 21.069-13.248 40.19-2.766 58.942 10.482 18.751 18.543 30.769 52.23 18.846 33.687-11.922 30.581-42.259 56.198-60.024 25.618-17.764 53.334-44.359 15.298-91.813-38.037-47.454-62.251-14.259-84.082-21.086z"/></g></svg>

        </div>
{/* TODO: Create second section ("we're different") */}
        {/* <div classname=""></div> */}




    </div>
  )
}

export default LandingPage