# react-ringing-bell
React component that makes a bell image/icon or any component/element (all child components) ring/shake within desired duration after being triggered

## Install

```bash
npm install --save react-ringing-bell
```

## Usage

### Example

```javascript
import RingingBell from 'react-ringing-bell';

class MyApp extends React.Component {
	componentDidMount(){
		// You can trigger the bell/elements to ring here, or any where else! (with the use of "ref")
		setInterval(() => {
			this._ringingBell.triggerRing();
		}, 10000);
		// After every 10 seconds, the bell will ring, but you can trigger this ringing-effect elsewhere!	
	}
    render() {
    	// You can put 1 or many components inside the <RingingBell>...</RingingBell>, they can be React components, DOM elements, or plain text, all of them will be shaken after being triggered!
        // ..but please take a careful look at how the "ref" is used!
        return (
            <RingingBell effectDuration={8000} ref={(thisBell) => { this._ringingBell = thisBell; }}>
				<img src="http://www.pngall.com/wp-content/uploads/2016/04/Bell-Transparent.png" style={{width: '100px', height: '100px'}}/>
				<div>Ringing Text</div>
            </RingingBell>
        );
    }
}
```

### Props

- `effectDuration: Number (miliseconds, default: 8000)` - Duration for the ringing effect

### Methods

- `triggerRing()` - Call this method whenener you want the bell/elements to ring/shake (please see my example)

## Thank you

- [React NPM Boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)
- "http://www.pngall.com" for the bell's image

## TODO
- Add Tests
- Write better instruction
- Create Demo page

## License

MIT
