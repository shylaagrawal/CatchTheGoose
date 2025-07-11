# Catch The Goose
// A game in which you have to use your arrow keys to move a bucket to catch a falling goose... but there's more

**Author**: Shyla Agrawal  
**Date**: June 30, 2024  
**Technology Stack**: JavaScript (p5.js), HTML, CSS (optional)

## Description
"Catch the Goose" is a multi-level browser-based game developed in p5.js. The game follows Gerald, a goose, through a series of 
increasingly challenging scenarios involving reflex-based mechanics, timed interactions, basic arithmetic, and dynamic obstacle 
evasion. Each level introduces new game logic, input methods, and visual and audio elements. The project was originally intended to 
demonstrate my skill of event-driven programming, animation, and multimedia integration in web-based JavaScript environments.

---

## Features
- Multi-stage gameplay with increasing difficulty
- Real-time keyboard and mouse interaction
- Procedural asset placement and randomized elements
- Custom transitions and win/lose states
- Preloaded multimedia assets (images, audio, fonts)
- Modular level logic separated by control flags
- Local state tracking for score, lives, timing, and position

---

## Technologies Used

- [p5.js](https://p5js.org/) - JavaScript creative coding library
- HTML5 and Canvas rendering via p5.js
- JavaScript ES6 features
- Custom assets: PNG, GIF, MP3, TTF (located in `/assets`)
- Optional: CSS for UI elements (e.g., buttons)

---

## Game Structure

### Level 1: Catch the Goose
- **Objective**: Catch 30 geese with a bucket before losing 3 lives.
- **Controls**: Arrow keys (← →)
- **Mechanics**: Collision detection, increasing fall speed, life tracking
- **Failure Condition**: Missing 3 geese
- **Win Condition**: Catching 30 geese
- **Assets**: Falling goose sprite, bucket sprite, heart/life icons, sound feedback

### Level 2: Feed the Goose
- **Objective**: Click on Gerald 15 times within the time limit.
- **Controls**: Mouse click
- **Mechanics**: Randomized goose position, click detection radius, timer countdown
- **Failure Condition**: Time expires before feeding 15 cookies
- **Win Condition**: Reach a score of 15 within 50 seconds
- **UI**: Dynamic timer color-coded by urgency (green/yellow/red)

### Level 3: Math vs. Shark
- **Objective**: Solve math problems before the shark reaches Gerald.
- **Controls**: Keyboard (numeric input)
- **Mechanics**: Randomized arithmetic questions (+, -, ×, ÷), timed answer input
- **Failure Condition**: Shark collides with Gerald
- **Win Condition**: Answer a predefined number of questions correctly 
- **Notes**: Includes validation for clean division problems

### Level 4: Obstacle Run
- **Objective**: Survive a scrolling field of obstacles for 20 seconds
- **Controls**: Spacebar (jump), Down Arrow (duck)
- **Mechanics**: Jump arc, ducking posture, object spawning with randomized types (bucket, shark, meteor), gravity simulation
- **Failure Condition**: Collision with any obstacle
- **Win Condition**: Last until 30 seconds, triggers final cutscene
