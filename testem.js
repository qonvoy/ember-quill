module.exports = {
  test_page: "tests/index.html?hidepassed",
  disable_watching: true,
  launch_in_ci: [
    "Firefox"
  ],
  launch_in_dev: [
    "Firefox"
  ],
  browser_args: {
    Firefox: {
      ci: [
        "--headless",
        "--window-size=1440,900"
      ].filter(Boolean)
    }
  }
};
