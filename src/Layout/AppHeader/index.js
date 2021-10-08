import React, { Fragment } from "react";
import cx from "classnames";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "reactstrap";

import HeaderLogo from "../AppLogo";

import MegaMenu from "./Components/MegaMenu";

import {
	setEnableMobileMenu,
	setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "",
		};

		this.updateState = this.updateState.bind(this);
		this.toggleMobileSmall = this.toggleMobileSmall.bind(this);
	}

	updateState() {
		this.setState({
			url: window.location.path,
		});
	}

	componentDidMount() {
		this.setState({
			url: window.location.pathname,
		});
		window.addEventListener("click", () => {
			setTimeout(() => {
				this.setState({
					url: window.location.pathname,
				});
				console.log(this.state.url);
			}, 280);
		});
	}

	componentWillUnmount() {}

	closePopupOnClick(event) {
		let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
		if (enableMobileMenuSmall) {
			if (this.state.mobileActive === true) {
				console.log(String(event.target.id));
				if (
					String(event.target.className) === "[object SVGAnimatedString]" ||
					String(event.target.id) === "MobileMenuID" ||
					String(event.target.id) === "btn-icon-wrapper" ||
					String(event.target.id) === "MobileMenuID" ||
					String(event.target.className) === "MobileMenuID" ||
					String(event.target.id) === "MobileMenuIcon"
				) {
					console.log("Yes");
				} else {
					console.log(String(event.target.id));
					this.toggleMobileSmall();
				}
			} else {
				this.setState({ mobileActive: false });
			}
			this.setState({ mobileActive: true });
		} else {
		}
	}

	toggleMobileSmall() {
		let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
		setEnableMobileMenuSmall(!enableMobileMenuSmall);
		this.setState({ mobileActive: false });
	}

	render() {
		let { headerBackgroundColor, enableMobileMenuSmall, enableHeaderShadow } =
			this.props;
		return (
			<Fragment>
				<div
					component="div"
					className={cx("app-header", headerBackgroundColor, {
						"header-shadow": enableHeaderShadow,
					})}
				>
					<HeaderLogo />

					<div
						className={cx("app-header__content", {
							"header-mobile-open": enableMobileMenuSmall,
						})}
					>
						<div className="app-header-left">
							<MegaMenu />
						</div>
						<div className="app-header-right">
							&nbsp;
							<Link to="/about">
								<Button
									onClick={() => {
										if (window.location.pathname === "/about") {
											window.location.reload();
										}
									}}
									className="btn-icon-horizontal btn-transition app-header-right"
									color="light"
								>
									<span style={{ fontSize: "22px", textAlign: "center" }}>About</span>
								</Button>{" "}
							</Link>
							&nbsp;
							<Link to="/contact">
								<Button
									onClick={() => {
										if (window.location.pathname === "/contact") {
											window.location.reload();
										}
									}}
									className="btn-icon-horizontal btn-transition app-header-right"
									color="light"
								>
									<span style={{ fontSize: "22px", textAlign: "center" }}>Contact</span>
								</Button>
							</Link>
							&nbsp;
							<Link to="/account">
								<Button
									onClick={() => {
										if (window.location.pathname === "/account") {
											window.location.reload();
										}
									}}
									className="btn-icon-horizontal btn-transition app-header-right"
									color="light"
								>
									<span style={{ fontSize: "22px", textAlign: "center" }}>Account</span>
								</Button>
							</Link>
							<span style={{ width: "15px" }}></span>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
	closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
	headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
	enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
	setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
	setEnableMobileMenuSmall: (enable) =>
		dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
