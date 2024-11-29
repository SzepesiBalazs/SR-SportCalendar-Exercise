# SR-SportCalendar-Exercise

The goal of this exercise is to assess your understanding of basic frontend programming concepts, including building user interfaces, handling user interactions, and ensuring responsiveness across devices. You will create a sports event calendar that displays events, allows users to view event details, and lets users add new events during runtime.

## Tech-Stack

- [Vue JS](https://vuejs.org)
- [Tailwind](https://tailwindcss.com)
- [ViTest](https://vitest.dev)

## Documentation

> [!IMPORTANT]
> Make sure you have a correct node version. 

```
npm install -g npm@latest
nvm install 20
```

### Run installation.

```
npm install
```

### Start the application and open the local host in your browser.

```
npm run dev
```

### Run tests

```
npm run test:unit
```

# Exercise-1

![Calendar view mockup](https://github.com/SzepesiBalazs/SR-SportCalendar-Exercise/blob/exercise-1/MockUpImages/Calender_preview.png)

- Create navigation with calendar view on page load.
- Create new page for "Add event".
- Create a function to get current month and days dynamically.
- Create a header element to display year and current month.
- Create a body element to display day and events.
- Adds day elements to grid layout using Tailwind.
- Style a single day with the date and events.
- Adapt styling for responsiveness

# Exercise-2

![Day view mockup](https://github.com/SzepesiBalazs/SR-SportCalendar-Exercise/blob/exercise-2/MockUpImages/Day_preview.png)

![Event detail view mockup](https://github.com/SzepesiBalazs/SR-SportCalendar-Exercise/blob/exercise-2/MockUpImages/Event_detail_preview.png)

- Include a link to each event to drive to a detail page.
- Add an icon on hover to indicate the details view.
- Add a new page where we display the data.

# Exercise-3

![Add Event mockup](https://github.com/SzepesiBalazs/SR-SportCalendar-Exercise/blob/exercise-3/MockUpImages/Add_Event_preview.png)

- Adds a form with input fields for every criteria of event details.
- Adds submit button which pushes the new event to the sportdata.
- Adds cancel button which clears the input fields.
- Makes improvement on data array to follow the event details structure.
