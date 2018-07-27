import * as React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
const { locale } = window.App;
import Loadable from "react-loadable";

// This example app only uses English. A fake `"en-UPPER"` locale is created so
// translations can be emulated.
addLocaleData(enLocaleData);
addLocaleData({
  locale: "en-UPPER",
  parentLocale: "en"
});

export default Loadable({
  loader: () =>
    Promise.resolve({
      foo: "bar"
    }),
  loading: () => {
    return <div> foo </div>;
  },
  render(loaded, props) {
    console.log(loaded);
    console.log("foo");
  }
});
