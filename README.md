<p align="center"><img src ="https://raw.githubusercontent.com/kis/react-native-air-progress-bar/master/plane.jpg" /></p>

<h1 align='center'>React Native Air Progress Bar</h1>

<p align='center'>Pretty customizable and animated progress-bar component for React Native.</p>

<p align='center'>
	<a href='https://www.npmjs.com/package/react-native-air-progress-bar'><img src="https://img.shields.io/npm/v/react-native-air-progress-bar.svg?style=flat-square" alt=""></a>
	<a href='https://www.npmjs.com/package/react-native-air-progress-bar'><img src='https://img.shields.io/npm/dm/react-native-air-progress-bar.svg?style=flat-square' /></a>
	<a href='https://www.npmjs.com/package/react-native-air-progress-bar'><img src='https://img.shields.io/npm/dt/react-native-air-progress-bar.svg?style=flat-square' /></a>
	<a href='https://github.com/kis/react-native-air-progress-bar'><img src='https://img.shields.io/travis/kis/react-native-air-progress-bar/master.svg?style=flat-square' /></a>
</p>

<br/>

<p>We often need to customize our mobile application according to our brand style needs. The easiest solution is to grab some UI kit, make some fast customizations, add custom styling, etc. But some components are hard for customizing. I mean progress bars, you know. So this is the react-native progress-bar component, which could be useful when you need to customize the default progress bar with different icons of current progress.</p> 
<p>This feature could be really killer in your mobile application brand style. You could use icons from <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a> repo or even your own. Currently, you have a plane icon by default. Also, the cool thing is that you have animation from the initial progress to the current progress value. So progress bar could be determinate or indeterminate. Useful when you need the progress indicator for some step-by-step activities.</p> 
<p>Project uses React Native <a href="https://facebook.github.io/react-native/docs/animations.html">Animated API</a>. Each time you update props, you will see the animation of the progress bar. The project is in search of contributors.</p>

</br>

<p align="center">The source for this module is in the <a href="https://github.com/kis/react-native-air-progress-bar">main repo</a>.</p>

<p align="center"><img src ="https://raw.githubusercontent.com/kis/react-native-air-progress-bar/master/anim.gif" /></p>

<h3 align='center'>Install</h3>

```
npm install react-native-air-progress-bar --save
npm i react-native-vector-icons
```

<h3 align='center'>Usage</h3>

```javascript
import ProgressBar from 'react-native-air-progress-bar';

<ProgressBar progress={0} />
<ProgressBar progress={25} />
<ProgressBar progress={50} initialProgress={25} />
<ProgressBar progress={75} initialProgress={50} />
<ProgressBar progress={100} initialProgress={75} />
<ProgressBar
    progress={60}
    initialProgress={20}
    barWidth="80%"
    iconName={<MaterialCommunityIcons name="train-car-passenger" size={35} color="orange" />}
    iconSize={35}
    iconColor="orange"
    hideIcon={false}
    activeBarColor="orange"
    inactiveBarColor="gray"
    activeBarStyle={{ borderRadius: 10 }}
    inactiveBarStyle={{ borderRadius: 10 }}
    />
```

<h3>Additional props</h3>
<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>progress</td>
      <td>PropTypes.number</td>
      <td>The current progress value of the progress bar.</td>
    </tr>
    <tr>
      <td>initialProgress</td>
      <td>PropTypes.number</td>
      <td>The initial progress value of the progress bar. Defaults to 25.</td>
    </tr>
    <tr>
      <td>barWidth</td>
      <td>PropTypes.oneOfType([PropTypes.number, PropTypes.string])</td>
      <td>The width of the progress bar. It can be either a number (interpreted as a percentage of the screen width) or a string representing a valid CSS width value.</td>
    </tr>
    <tr>
      <td>barHeight</td>
      <td>PropTypes.oneOfType([PropTypes.number, PropTypes.string])</td>
      <td>The height of the progress bar.</td>
    </tr>
    <tr>
      <td>activeBarColor</td>
      <td>PropTypes.string</td>
      <td>The color of the active portion of the progress bar.</td>
    </tr>
    <tr>
      <td>inactiveBarColor</td>
      <td>PropTypes.string</td>
      <td>The color of the inactive portion of the progress bar.</td>
    </tr>
    <tr>
      <td>activeBarStyle</td>
      <td>ViewPropTypes.style</td>
      <td>Additional styles to apply to the active portion of the progress bar.</td>
    </tr>
    <tr>
      <td>inactiveBarStyle</td>
      <td>ViewPropTypes.style</td>
      <td>Additional styles to apply to the inactive portion of the progress bar.</td>
    </tr>
    <tr>
      <td>iconName</td>
      <td>PropTypes.element</td>
      <td>The render any component of the icon/Image to be displayed.</td>
    </tr>
    <tr>
      <td>iconSize</td>
      <td>PropTypes.number</td>
      <td>The size of the icon.</td>
    </tr>
    <tr>
      <td>iconColor</td>
      <td>PropTypes.string</td>
      <td>The color of the icon.</td>
    </tr>
    <tr>
      <td>hideIcon</td>
      <td>PropTypes.bool</td>
      <td>A flag indicating whether to hide the icon.</td>
    </tr>
  </tbody>
</table>


<h3 align='center'>License</h3>

The MIT License (MIT) Copyright (c) 2017

