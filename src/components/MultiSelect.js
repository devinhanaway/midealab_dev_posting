// import '../App_Hero.css';
//
//
// import React, { Component } from 'react';
// import createClass from 'create-react-class';
// import PropTypes from 'prop-types';
// import Select from 'react-select';
// import NavbarSecondary from "./NavbarSecondary"
//
// const EXPERTISE = [
// 	{ label: 'Front-end(Web)', value: 'front-end' },
// 	{ label: 'Back-end(Web)', value: 'back-end' },
// 	{ label: 'Full-stack', value: 'full-stack' },
// 	{ label: 'iOS', value: 'iOS' },
// 	{ label: 'Android', value: 'android' },
// 	{ label: 'MachineLearning/Data', value: 'ml/data' },
// 	{ label: 'Wearables/Data', value: 'wearables' },
// ];
//
//
// const LANGUAGES = [
//   { label: 'React', value: 'react' },
//   { label: 'Angular', value: 'Angular' },
// 	{ label: 'Java', value: 'java' },
// 	{ label: 'Javascript', value: 'savascript' },
// 	{ label: 'PHP', value: 'PHP' },
// 	{ label: 'Python', value: 'python' },
// 	{ label: 'Ruby', value: 'ruby' },
// 	{ label: 'Objective-C', value: 'objective-c' },
// 	{ label: 'Swift', value: 'swift' },
// 	{ label: 'Scala', value: 'scala' },
//   { label: 'Go', value: 'go' },
// 	{ label: 'Node', value: 'node' },
// 	{ label: 'sql', value: 'sql' },
// 	{ label: 'Postgres', value: 'Postgres' },
// ];
//
// const EXPERIENCE = [
//   { label: '0-1 years', value: '0-1' },
//   { label: '2-4 years', value: '2-4' },
// 	{ label: '5+ years', value: '5+' },
// ];
//
//
// // var MultiSelectField = createClass({
// // 	displayName: 'MultiSelectField',
// // 	propTypes: {
// // 		label: PropTypes.string,
// // 	},
//
// export default class MultiSelect extends Component {
//
//
//   constructor(){
//     super()
//     this.state = {
//       removeSelected: true,
//       disabled: false,
//       crazy: false,
//       stayOpen: false,
//       expertise: [],
//       languages: [],
//       first_name:"",
//       last_name:"",
//       email:"",
//       github:"",
//       linkedin:"",
//       portfolio:"",
//       example:"",
//       college:"",
//       company:"",
//       location:"",
//       rtl: false,
//     }
//
//   }
//
//   //
// 	// getInitialState () {
// 	// 	return {
// 	// 		removeSelected: true,
// 	// 		disabled: false,
// 	// 		crazy: false,
// 	// 		stayOpen: false,
// 	// 		value: [],
// 	// 		rtl: false,
// 	// 	};
// 	// }
//
//
// 	handleSelectChangeExpertise = (expertise) => {
// 		console.log('You\'ve selected:', expertise);
// 		this.setState({ expertise });
// 	}
//
// 	handleSelectChangeLanguages = (languages) => {
// 		console.log('You\'ve selected:', languages);
// 		this.setState({ languages });
// 	}
//
//
// 	handleSelectChangeExperience = (experience) => {
// 		console.log('You\'ve selected:', experience);
// 		this.setState({ experience });
// 	}
//
// 	toggleCheckbox = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.checked,
// 		});
// 	}
//
// 	toggleRtl = (e) => {
// 		let rtl = e.target.checked;
// 		this.setState({ rtl });
// 	}
//
//   handleChange = (e) => {
//
//        this.setState({[e.target.name]: e.target.value});
//
//    }
//
// 	render () {
// 		const { crazy, disabled, stayOpen, expertise } = this.state;
// 		const options = EXPERTISE;
// 		const optionsLanguages = LANGUAGES;
// 		const optionsExperience = EXPERIENCE;
// 		return (
//       <div>
//
//         <NavbarSecondary></NavbarSecondary>
//
// 			<div id="apply" className="ui container">
//
// 				<h3 className="section-heading">Interested in joining the Midealab Team?</h3>
//       <div className="row">
//
//     <label> First Name</label>
//       <input
//         className="mdl-textfield__input"
//         type="text"
//         //
//         name="first_name"
//         value={this.state.first_name}
//         onChange={this.handleChange}
//         id="first_name"
//         placeholder="Devin"
//       />
//     </div>
//
//     <div className="row">
//
//     <label>Last Name</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="last_name"
//         value={this.state.last_name}
//         onChange={this.handleChange}
//         id="last_name"
//         placeholder="Hanaway"
//       />
//   </div>
//     <div className="row">
//
//     <label>Email</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="email"
//         value={this.state.email}
//         onChange={this.handleChange}
//         id="email"
//         placeholder="jobs@midelab.com"
//       />
//   </div>
//     <div className="row">
//
//     <label>Github</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="github"
//         value={this.state.github}
//         onChange={this.handleChange}
//         id="github"
//         placeholder="https://github.com/devinhanaway"
//       />
//   </div>
//     <div className="row">
//
//     <label>LinkedIn</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="linkedin"
//         value={this.state.linkedin}
//         onChange={this.handleChange}
//         id="linkedin"
//         placeholder="https://linkedin.com/devinhanaway"
//       />
//   	</div>
//     <div className="row">
//
//     	<label>Portfolio</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="portfolio"
//         value={this.state.portfolio}
//         onChange={this.handleChange}
//         id="portfolio"
//         placeholder="https://www.devinhanaway.com"
//       />
//   	</div>
//     <div className="row">
//
//     	<label>Please provide a link to code you are proud of.</label>
//       <input
//         className="mdl-textfield__input" type="text"
//         name="example"
//         value={this.state.example}
//         onChange={this.handleChange}
//         id="example"
//         placeholder=""
//       />
//   	</div>
// 			<div className="row">
//
//
// 	      <label>
// 	        What are your primary engineering expertise
// 	      </label>
// 					<Select
// 						closeOnSelect={!stayOpen}
// 						disabled={disabled}
// 						multi
// 						onChange={this.handleSelectChangeExpertise}
// 						options={options}
// 						placeholder="Select your primary engineering expertise"
// 	          removeSelected={this.state.removeSelected}
// 						rtl={this.state.rtl}
// 						simpleValue
// 						value={expertise}
// 					/>
// 			</div>
// 			<div className="row">
//
//         	<label>
//           	What are your primary languages / technologies
//         	</label>
// 						<Select
// 						closeOnSelect={!stayOpen}
// 						disabled={disabled}
// 						multi
// 						onChange={this.handleSelectChangeLanguages}
// 						options={optionsLanguages}
// 						placeholder="Select your your primary languages / technologies"
// 	          removeSelected={this.state.removeSelected}
// 						rtl={this.state.rtl}
// 						simpleValue
// 						value={this.state.languages}
// 					/>
// 			</div>
// 			<div className="row">
//
//         <label>
//           How many years of experience do you have in your primary language?
//         </label>
// 				<Select
// 					closeOnSelect={!stayOpen}
// 					disabled={disabled}
// 					multi
// 					onChange={this.handleSelectChangeExperience}
// 					options={optionsExperience}
// 					placeholder="2-4 years"
//           removeSelected={this.state.removeSelected}
// 					rtl={this.state.rtl}
// 					simpleValue
// 					value={this.state.experience}
// 				/>
// 		</div>
// 		<div className="row">
//
// 			<label>If you are proficient in any other languages or frameworks, please list them below.</label>
// 			<input
// 				className="mdl-textfield__input" type="text"
// 				name="other_languages"
// 				value={this.state.other_languages}
// 				onChange={this.handleChange}
// 				id="other_languages"
// 				placeholder="ember, mongoose, vue.js"
// 			/>
// 		</div>
//
// 		<div className="row">
//
//
// 			<label>
// 				What college or university did you attend and for what program?
// 			</label>
// 			<input
// 				className="mdl-textfield__input" type="text"
// 				name="college"
// 				value={this.state.college}
// 				onChange={this.handleChange}
// 				id="college"
// 				placeholder="Ukraining Technical university"
// 			/>
// 		</div>
// 		<div className="row">
// 			<label>
// 				What is your current or last employer?
// 			</label>
// 			<input
// 				className="mdl-textfield__input" type="text"
// 				name="company"
// 				value={this.state.company}
// 				onChange={this.handleChange}
// 				id="company"
// 				placeholder="Kindgeek, Freelancer"
// 			/>
// 		</div>
// 		<div className="row">
// 			<label>
// 				Where are you currently living?
// 			</label>
// 			<input
// 				className="mdl-textfield__input" type="text"
// 				name="location"
// 				value={this.state.location}
// 				onChange={this.handleChange}
// 				id="location"
// 				placeholder="Lviv, Kiev, Etc."
// 			/>
// 		</div>
//     <div id="submitApplication" className="ui header centered">
//       <button className="ui button centered">Submit Application</button>
//
//
//     </div>
//
// 			</div>
//
//     </div>
//
// 		);
// 	}
//
// }
