# Agenda (A01)

> These are my notes on what I plan to teach in each [**upcoming class**](#dec-01). Also check out the [**Draft Planning Calendar**](./Calendar.md)
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


> ## Starter Kits
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*


----

## Sep-Dec 2025 Schedule

### Sep 02

- Introductions
- Course Overview
- GitHub Account Setup
- Software Setup
- Workbook Setup
- [JavaScript Review (Intro)](https://dmit-2008.github.io/dmit2008/classes/week-1/day-2)
  - [ ] Variables and block scoping
  - [ ] Functions
  - [ ] If statements
  - [ ] DOM API
  - [ ] Arrays and Loops
- Homework:
  - [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0011/)
  - Read [Exploring ES6, chapters 1-3](https://exploringjs.com/es6/)


### Sep 08

See the overview of [today's lesson](https://dgilleland.github.io/DMIT-2008/lessons/w02-d1/) on my Ad-Hoc site.

- [x] First JavaScript Demo + Node Project Setup
- **Homework**
  - [ ] Complete any unfinished parts of the first JavaScript Demo
  - [ ] Read the instructions for the *Astronauts* demo and set up the Node project for that starter kit.

### Sep 09

- [ ] Continue JavaScript Review with the [Astronaut](./src/A/review-astronauts-example-START/README.md) demo
- [ ] Get the Starter Kit for the Weather App in-class demo; this is an *ad-hoc* starter kit that you can quickly grab using `pnpm`.

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/DMIT-2008-A01-Sep-2025/sk/A/weather-app-start ./src/A/weather-app
    ```



### Sep 15

- **Today**
  - More [JavaScript Review](https://dmit-2008.github.io/dmit2008/classes/week-2/day-2)
  - Work on Weather App demo
- **Homework**
  - *Review [complete solution for Weather App](https://dgilleland.github.io/DMIT-2008/lessons/w02-d2/) demo*

### Sep 16

- **Today** - Begin [Part B](./src/B/ReadMe.md)
  - [Intro to React and NextJS](https://dmit-2008.github.io/dmit2008/classes/week-3/day-1)
  - [Props, Wrappers, and Lists (Part 1)](https://dmit-2008.github.io/dmit2008/classes/week-3/day-2)

### Sep 22

- **Today**
  - ***Lab Questions** will be addressed in the last 15 minutes of class.*
    - *Note the requirements for **incremental work** and how you might **lose 50%** of your mark for not doing it!*
  - [Props, Wrappers, and Lists (Part 2)](https://dmit-2008.github.io/dmit2008/classes/week-4/day-1)
  - [ ] Review/Attempt the other [NextJS/React Intro demos](./src/B/ReadMe.md)
  - [ ] Identify the [**main takeaways**](./src/B/Takeaways.md)


### Sep 23

- **Today**
  - [ ] Assignment 1 Troubleshooting
  - [ ] Complete Part B - Bootstrap and MUI

### Sep 29

- **Today**
  - [ ] Begin [Part C](./src/C/ReadMe.md)

### Sep 30

- ***No Classes***

### Oct 06

- **Today** - Begin [Part D](./src/D/ReadMe.md)


### Oct 07

- **Today** - Continue [Part D](./src/D/ReadMe.md)
  - [ ] Identify the [**main takeaways**](./src/D/Takeaways.md)


### Oct 13

- ***No Classes*** - Thanksgiving

### Oct 14

- **Today** - Begin [Part E](./src/E/ReadMe.md)
  - 15 Minutes: [API Calls](./src/E/react-rest-fundamentals-START/README.md)
    - **Use something other than Quotes!** - https://www.apicountries.com ⭐ The Repo!!
  - 10 Minutes: **What is REST?**
    - 📺 [REST APIs Explained in 30 secs](https://youtube.com/shorts/hQUjpbb75eY?si=HQ_pLE1seM5Ry34a) (**0:30**)
    - 📺 [What is a Rest API? (in 2 Minutes)](https://youtu.be/WRsKs-K6iII?si=KmY0EUARM7WsNVsx) (**2:10**)
    - 📺 [What Is REST API? Examples And How To Use It: Crash Course System Design](https://youtu.be/-mN3VyJuCjM?si=mSE4UNsvRJ9p_xTO) (**5:20**)
  - 90 Minutes: [REST Calls on an API](./src/E/react-rest-reviews-app-START/README.md)
  - [ ] Identify the [**main takeaways**](./src/E/Takeaways.md)
- **Homework**
  - [ ] Try the refactoring of the [Rest Review Day 2](./src/E/react-rest-reviews-app-START/README-DAY-2.md) on your own
  - [ ] Begin ***Assignment 3*** - States, Events and Templating


### Oct 20

- **Today**
  - [Part F](./src/F/ReadMe.md) - **Deploying to Vercel**
    - Try the [Deploy-React-App](https://github.com/dgilleland/Deploy-React-App) as a starter kit.
    - We'll need to **adapt the instructions** so that you use your **personal GitHub account** for this demo
    - 🚨 **NEVER** publish marked assignments outside of the provided *GitHub Classroom assignment repos*. This includes *after you finish this course*.
- **Homework**
  - Try deploying another website of yours to Vercel.

### Oct 21

- **Today**
  - [Part G](./src/G/ReadMe.md) - **React Components and LifeCycle**
  - Continue [Part G](./src/G/ReadMe.md) - **React Components and LifeCycle**
- **Homework**
  - Install the [React Dev Tools](https://react.dev/learn/react-developer-tools) for your browser.

### Oct 27

- **Today**
  - [Part H](./src/H/ReadMe.md) - **NextJS Routing and Pages**
    - [Takeaways](./src/H/Takeaways.md)

### Oct 28

- **Today**
  - [Part I](./src/I/ReadMe.md) - **SSR**
    - [Astronauts](./src/I/nextjs-12-space-page-ssr-START/README.md)
    - [Takeaways](./src/I/Takeaways.md)

### Nov 03

- **Today**
  - Continue [Part I](./src/I/ReadMe.md) - **SSR**
    - [SSR Calls to the Backend](./src/I/nextjs-12-reviews-app-ssr-START/README.md)
    - Follow along on [**Week 10, Day 1**](http://dgilleland.github.io/DMIT-2008/lessons/w10-d1/)
  - *Assignment 4A* - QnA
  - **Bonus Time:** Listen to me Lecture about Automated Testing... 😃

### Nov 04

- **Today**
  - Testing - the start of a multi-day journey....
  - Begin [Part J](./src/J/ReadMe.md)
  - Review notes on [**Week 10, Day 2**](https://dgilleland.github.io/DMIT-2008/lessons/w12-d1/)

### Nov 10

> *Lost class due to fall break* 😢

### Nov 11

> *Lost class due to fall break* 😢


### Nov 17

- **Today**
  - Testing (cont.)
  - Continue [Part J](./src/J/ReadMe.md)
    - 🐞 Snag hit in outdated demo

### Nov 18

- **Today**
  - Begin [Part K](./src/K/ReadMe.md)
    - `useContext()` and Application State
    - This has a [**backend**](./src/K/rest-reviews-with-context-toast-START/reviews-mock-backend) and a [**front-end**](./src/K/rest-reviews-with-context-toast-START/reviews-rest-app)
    - We will follow the [**instructions**](./src/K/rest-reviews-with-context-toast-START/README.md) and see where they lead....

### Nov 24

- **Today**
  - Continue [Part K](./src/K/ReadMe.md)
    - Authentication
      - Video (6:22): [Why OAuth is Breaking Your App - Fix These 10 Mistakes](https://youtu.be/WrA1XVtaU0g?si=lsGyTqYhl9vmoSfb)
    - This also has a [*backend*](./src/K/authentication-example-START/authentication-mock-backend/) and a [*front-end*](./src/K/authentication-example-START/app-state-auth-example-new/)
    - Again, we will follow the [*instructions*](./src/K/authentication-example-START/README.md) and see where we end up.

### Nov 25

- **Today**
  - Complete [Part K](https://github.com/DG-InClass/DMIT-2008-A01-Sep-2025/blob/main/src/K/authentication-example-START/README.md#9-lets-protect-our-dashboard-page-this-should-only-available-to-users-that-are-authenticated-so-we-want-to-reroute-our-unauthenticated-users-lets-do-this-with-our-useauth-hook) <!-- ewww -->
  - General Review
  - About *Assignment **5***

### Dec 01

- **Today**
  - Assignment 5

### Dec 02

- **Today**
  - Unit Testing (Revisited)
<!-- 
    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/DMIT-2008-A01-Sep-2025/sk/J/testing-revisited ./src/J/testing-revisited
    ```
 -->

### Dec 08


### Dec 09


### Dec 15


### Dec 16

