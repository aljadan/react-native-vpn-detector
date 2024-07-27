import ExpoModulesCore

public class VpnDetectorModule: Module {
  public func definition() -> ModuleDefinition {
    Name("VpnDetector")

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
