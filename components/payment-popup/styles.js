const Styles = () => (
	<style jsx="true">{`
		.boost-publisher-container {
			height: 100%;
			width: 100vw;
			background: rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: column;
			position: fixed;
			bottom: 0;
		}

		.boost-publisher-grow {
			flex-grow: 1;
		}

		.boost-publisher-wrapper {
			display: flex;
			position: fixed;
			bottom: 0;
			width: 100%;
		}

		.boost-publisher {
			width: 600px;
			max-width: calc(100% - 24px);
			background: white;
			border-radius: 6px 6px 0 0;
		}

		.boost-publisher-header {
			padding: 16px;
			display: flex;
			align-items: center;
		}

		.input-content-container {
			padding-bottom: 1em;
		}
		.input-diff-container {
			padding-top: 1em;
			padding-bottom: 1em;
		}

		.label {
			font-size: 1.1em;
		}

		.input-content {
			padding: 10px;
			border: solid 1px #eee;
			border-radius: 6px;
			display: block;
			width: 100%;
			font-size: 1.1em
		}
		.input-diff {
			padding: 10px;
			border: solid 1px #eee;
			border-radius: 6px;
			display: inline-block;
			font-size: 1.1em;
			margin: 10px;
		}

		.boost-publisher-logo {
			height: 22px;
		}

		.boost-publisher-close {
			font-size: 18px;
			line-height: 21px;
			color: #bdbdbd;
			margin: 0;
			font-weight: normal;
			cursor: pointer;
		}

		.boost-publisher-body {
			padding: 16px;
			border-top: 2px solid #f2f2f2;
		}

		p.lead {
			font-size: 1.1em;
		}

		.boost-publisher-bumper {
			height: 10vh;
		}

		.boost-publisher-form-control {
			margin-top: 0;
			margin-bottom: 0;
		}

		.pow-help-text {
			text-decoration: underline;
			color: #696969;
			font-size: 0.8em;
		}
		.boost-publisher-select {
			color: #696969;
			font-size: 14px;
			line-height: 17px;
		}

		.boost-publisher-menu-list {
			padding: 0;
		}

		.boost-publisher-menu-item {
			font-size: 14px;
			line-height: 20px;
			color: #696969;
			padding: 12px;
		}

		.payment-completed-section {
			margin-top: 1em;
		}
		.boost-publisher-menu-item-selected {
			color: #ffffff;
			background-color: #085af6 !important;
		}

		.boost-publisher-select-outlined {
			border: 1px solid #f2f2f2 !important;
		}

		.MuiOutlinedInput-notchedOutline {
			border-color: #f2f2f2 !important;
			border-width: 1px !important;
		}
	`}</style>
);

export default Styles;
