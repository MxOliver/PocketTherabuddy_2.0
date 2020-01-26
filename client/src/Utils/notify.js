import React from "react";
import { reportError } from "./error";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";
import EditorCloseIcon from "@atlaskit/icon/glyph/editor/close";
import { rgb } from "polished";

toast.configure({
	autoClose: 60000,
	draggable: false,
	hideProgressBar: true,
	closeButton: <EditorCloseIcon />
});

const notify = {};

const notification = {
	error: {
		background: rgb(255, 235, 230),
		text: rgb(191, 38, 0)
	},
	info: {
		background: rgb(222, 235, 255),
		text: rgb(7, 71, 166)
	},
	warning: {
		background: rgb(255, 240, 179),
		text: rgb(240, 145, 2)
	},
	success: {
		background: rgb(227, 252, 239),
		text: rgb(0, 102, 68)
	}
};

notify.info = ({ content = "Info.", ...options }) => {
	const wrappedOptions = {
		...options,
		className: css({
			background: notification.info.background,
			color: notification.info.text
		}),
		bodyClassName: css({
			color: notification.info.text,
			marginLeft: "1em"
		})
	};
	return toast.info(content, wrappedOptions);
};

notify.warn = ({ content = "Warning!", ...options }) => {
	const wrappedOptions = {
		...options,
		className: css(
			{ background: notification.warning.background },
			{ color: notification.warning.text }
		),
		bodyClassName: css(
			{
				color: notification.warning.text
			},
			{ marginLeft: "1em" }
		)
	};

	return toast.warn(content, wrappedOptions);
};

notify.success = ({ content = "Success!", ...options }) => {
	const wrappedOptions = {
		...options,
		className: css({
			background: notification.success.background,
			color: notification.success.text
		}),
		bodyClassName: css({
			color: notification.success.text,
			marginLeft: "1em"
		})
	};

	return toast.success(content, wrappedOptions);
};

notify.error = ({ content = "Something went wrong", ...options }) => {
	reportError(options);

	const wrappedOptions = {
		...options,
		className: css({
			backgroundColor: notification.error.background,
			color: notification.error.text
		}),
		bodyClassName: css({
			color: notification.error.text,
			backgroundColor: notification.error.background,
			marginLeft: "1em",
			fontSize: "1rem"
		})
	};
	toast.error(content, wrappedOptions);
};

export default notify;
