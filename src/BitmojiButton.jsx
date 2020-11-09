import { useEffect } from 'react';

function BitmojiButton(props) {
	useEffect(() => {
		window.snapKitInit = function () {
			// Argument 1
			var bitmojiWebPickerIconClass = "my-bitmoji-stickerpicker-icon-target";

			// Argument 2
			var uiOptions = {
				onStickerPickCallback: function onStickerPickCallback(bitmojiImgURL) {
					props.setBitmojiURL(bitmojiImgURL);
				},
				webpickerPosition: "bottomRight",
			};

			// Argument 3
			var loginParamsObj = {
				clientId: process.env.REACT_APP_CLIENT_ID,
				redirectURI: process.env.REACT_APP_REDIRECT_URL,
				scopeList: [
					// the list of scopes you are approved for
					"user.bitmoji.avatar",
					"user.display_name",
				],
			};

			// Mount Bitmoji Icon(s)
			window.snap.bitmojikit.mountBitmojiStickerPickerIcons(
				bitmojiWebPickerIconClass,
				uiOptions,
				loginParamsObj
			);
		};

		// Load the SDK asynchronously
		(function (d, s, id) {
			var js,
				sjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://sdk.snapkit.com/js/v1/login_bitmoji.js";
			sjs.parentNode.insertBefore(js, sjs);
		})(document, "script", "bitmojikit-sdk");
	}, [props])

	return (
		<div
			className="my-bitmoji-stickerpicker-icon-target bitmoji-button"
			style={{position: 'absolute', right: '0'}}
		/>
	);
}

export default BitmojiButton;