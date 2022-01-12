# 🛠️ LHD: Build 2022

Welcome to my LHD: Build portfolio, where you'll find my hackathon projects and programs for MLH's LHD: Build 2022. Most of these are small and simple — given the very limited amounts of time I have to spend on coding, this is how I'm making sure to meet my goal of coding as often as possible, even if it means reviewing familiar concepts or taking tiny steps forward in my learning journey.

### [Visit the microsite to see some submissions live-hosted: https://cw118.github.io/lhd_build/](https://cw118.github.io/lhd_build/)

My submissions to Build challenges will all be demoed, if possible, at the GitHub Pages site for this repo linked above.

### 🔗 Check out these links to find out more about:

- **Local Hack Day (LHD)**: https://localhackday.mlh.io/
  - **LHD: Build**: https://localhackday.mlh.io/build
- **Major League Hacking (MLH)**: https://mlh.io/
  - **MLH's 2022 season schedule**: https://mlh.io/seasons/2022/events

---

### ⛅ [Day 1](https://cw118.github.io/lhd_build/weather.html)

I chose the **weather script** *(write a script that checks the weather)* challenge for [day 1 of Build](https://lhd-build-day-1.devpost.com/). My submission consisted of a few `HTML` and `CSS` files, but the star is the JS script (located in the `day1` folder of this repo) — it uses `async/await` to fetch information from the OpenWeatherMap API, then dynamically updates the HTML to display weather information for the user's desired city.

*You can also view it on [Devpost](https://devpost.com/software/weather-checker) and at [its page on the microsite](https://cw118.github.io/lhd_build/weather.html)!*

---

### 🔀 [Day 2](https://cw118.github.io/lhd_build/reversestr.html)

I chose the **string reverse** *(write a script to reverse a string)* challenge for [day 2 of Build](https://lhd-build-day-2.devpost.com/). My submission once again included `HTML` and `CSS` files, with a super simple `JavaScript` program (located in the `day2` folder) as the real star of the show. The JS script uses a `for` loop to add each character of the user-inputted string, starting from the end (last character of its index), into the `reversedStr` variable. The HTML is then dynamically updated to display the resulting reversed string.

Given the simplicity of this challenge, I decided to add a "Copy string" button to learn how to interact with the clipboard using JavaScript. The script detects whether the string is empty, as well as whether the clipboard write was successful, and returns/displays a message to the user based on these checks. If all goes well, the message just says "Copied!"

*You can also view it on [Devpost](https://devpost.com/software/string-reverser) and at [its page on the microsite](https://cw118.github.io/lhd_build/reversestr.html)!*

---

### 🖽 [Day 3](https://cw118.github.io/lhd_build/day3/tailwind.html)

I chose the **front-end framework** *(build with a front-end framework)* challenge for [day 3 of Build](https://lhd-build-day-3.devpost.com/). This mini-project (unsurprisingly) involved `HTML`, `CSS` and `JavaScript`, but instead of using the W3.CSS framework like I did for the rest of my `lhd_build` Pages site, I tried incorporating [Tailwind CSS](https://tailwindcss.com) — and I must say, I had an absolute blast coding the day 3 page. 

With the help of some [Flowbite](https://flowbite.com/) components, I created a fully responsive page that I personally think has a quite professional look to it (obviously, the design, content and everything can be improved further, but my focus here was to learn the basics of Tailwind). I decided to implement a dark mode as well, which was lots of fun: the light and dark styles can be toggled thanks to a very simple JS program (the day 3 `script.js` file) that I wrote.

*You can also view it on [Devpost](https://devpost.com/software/a-tailwind-site) and see it for yourself at [its page on the microsite](https://cw118.github.io/lhd_build/day3/tailwind.html)!*
