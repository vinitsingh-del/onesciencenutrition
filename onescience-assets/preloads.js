
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.iRHCMwIP.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DNLhBUj7.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BYSXkC48.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.MHRVz8sW.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload.BVVZMC0J.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.DsjjwgBl.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode.BsMNVLFD.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.BbwJiKob.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.zheaRp_p.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index.DFJwX4bF.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.X7GgWIn5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.B5OpghnX.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.agT39P8p.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.1XsA03J8.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes.Cj9bBwu1.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.MEVo5GR0.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.DSirJCYA.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.DqShInCi.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.59vXxPLw.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.C7CPf_05.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.BP8ZFzba.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.B02Givci.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.DCMF5BJq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.tTD_Mhus.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.CKVuRAeM.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.ClhqIeM3.js","/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader.BjZbHN3w.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.DL05QgGt.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.DH2wkfoV.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.LhBr2F4k.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.rLtUtfbr.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.28BUPC5-.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.Dp3qGzCo.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.DiwMJY-a.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList.CeDRjFiL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.Gy5989Lp.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.CF49WYjZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BLRpAgwU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.z3g0BYNN.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.BFgEpUfh.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.BVUHPY--.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.DLxf-34T.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.D7h-Dh1b.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.CsVvTsKc.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.DqsUL96m.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks.CAWlrlo5.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo.D20wxvNo.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.Cbe67oiF.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.DozLbtet.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BuavhXH5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.CLXqZqpG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment.CV42Xu30.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.kJyT3RoM.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.DpzWw9uE.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.BAV6G7gJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.DUVhx2y0.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner.kyhles-I.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.CKX6XC_P.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility.yULZ8aTk.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants.Cu2A-vp8.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.D2hzucHb.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.kzHHut7F.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.C5JF7Er1.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions._eyq-k1e.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.Svi446C-.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Dotoc5qr.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.hgA3gkWu.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.DNRAKITa.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DiZAauIW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BHVWPumE.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.Cv8laLxP.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DMS6UOLG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.CXL2ixRx.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.BKkD9pN0.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.7rojo4gN.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.CQQWNJn-.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.CfxFydZe.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CMvjny27.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.73ZLLi3-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/phoneCountryCode.C-ppsiYq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.Brp6A-O7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CQM_ODoE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.D_EbuoqI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.BGuC5g6Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CtCAWdWo.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletLogo.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.BSntDI5A.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CompactChoiceList.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.Dj0n4Opx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.DN6CUyst.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.Dl_bEC_c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayPalOverCaptureInfoBanner.CuS5ve3d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.uv-X4L1-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CalloutHeader.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0952/0483/5648/files/osn_logo_1_x320.png?v=1756536655"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  