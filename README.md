<p align="center"><img src ="https://raw.githubusercontent.com/kis/react-native-air-progress-bar/master/plane.jpg" /></p>

<h1 align='center'>React Native Air Progress Bar</h1>

<p align='center'>Pretty customizable and animated progress-bar component for React Native.</p>

<br/>

<p>This is react-native progress-bar component, which could be useful when you need to
customize default progress-bar with different icons of current progress. You could use
icons from <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a> repo.
Currently you have plane icon by default. Also cool thing is that you have animation from initial progress to the
final progress value. Each time you update props, you will see the animation of progress-bar. The project
is in search for contributors.</p>

</br>

![alt text](https://raw.githubusercontent.com/kis/react-native-air-progress-bar/master/plane.jpg)

<p align="center">The source for this module is in the <a href="https://github.com/kis/react-native-air-progress-bar">main repo</a>.</p>

<p align="center"><img src ="https://raw.githubusercontent.com/kis/react-native-air-progress-bar/master/anim.gif" /></p>

<h3 align='center'>Install</h3>

```
npm install react-native-air-progress-bar --save
```

<h3 align='center'>Usage</h3>

```javascript
import ProgressBar from 'react-native-air-progress-bar';

<ProgressBar progress={0} />
<ProgressBar progress={25} />
<ProgressBar progress={50} initialProgress={25} />
<ProgressBar progress={75} initialProgress={50} />
<ProgressBar progress={100} initialProgress={75} />
```

<h3 align='center'>License</h3>

The MIT License (MIT) Copyright (c) 2017
