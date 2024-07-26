import ExpoModulesCore

public class VpnDetectorModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('VpnDetector')` in JavaScript.
    Name("VpnDetector")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("isVpnActive") {
      let cfDict = CFNetworkCopySystemProxySettings()
      let nsDict = cfDict?.takeRetainedValue() as NSDictionary?
      let keys = nsDict?["__SCOPED__"] as? NSDictionary
    
      for key: String in keys?.allKeys as? [String] ?? [] {
        if (key.contains("tap") || key.contains("tun") || key.contains("ppp") || key.contains("ipsec") || key.contains("utun")) {
          return true
        }
      }
    
      return false
    }
  }
}
