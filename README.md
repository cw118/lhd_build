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

### [Day 4](https://cw118.github.io/lhd_build/scraper.html)

For [day 4 of Build](https://lhd-build-day-4.devpost.com/), I completed the **web scraper** *(build a web scraper application)* challenge to change things up a little. While this project is still related to websites, there aren't any HTML, CSS or JS files that I'd really consider to be a part of it. The main thing it runs on is Python — and I actually ended up building two versions of it. Both scrape content from Marianopolis College's website(s), which is an [anglophone CEGEP in Quebec (click here to find out more about CEGEP!).](https://cw118.github.io/quetudesinfo/)

One version is a command-line tool, in a sense; all of the files needed to run the scraper/tool (Python script and some text files) are found in the `day4` folder of this repo. Full instructions for this version can be found at the [day 4 page of my LHD: Build microsite](https://cw118.github.io/lhd_build/scraper.html).

The second version is a [self-updating README](https://github.com/cw118/mari-updates) that I coded with a slightly modified version of the Python script from the command-line tool, and then automated using a custom GitHub Action so that the scraper script is run once every day, updating the README with the scraped content each time *(I also added some error checking so that the program lists the links I need to look into and update in the `ERRORS.md` file if the HTTP status code returned isn't `200 OK`)*. I'm so glad to have got this working, since I just started learning GitHub Actions, and it really is a great and powerful integrated tool that I'll probably be using quite a bit in the future. You'll find the code, Actions workflow and the README itself in my [`mari-updates` repo](https://github.com/cw118/mari-updates).

*Read more about the two versions of the scraper I coded on [Devpost](https://devpost.com/software/mari-web-scraper) and at [the day 4 page on the microsite](https://cw118.github.io/lhd_build/scraper.html)!*
