package expo.modules.vpndetector

import android.annotation.SuppressLint
import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.exception.Exceptions

class VpnDetectorModule : Module() {
  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  @SuppressLint("MissingPermission")
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('VpnDetector')` in JavaScript.
    Name("VpnDetector")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("isVpnActive") {
      val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
      val activeNetwork = connectivityManager.activeNetwork
      val networkCapabilities = connectivityManager.getNetworkCapabilities(activeNetwork)

      networkCapabilities?.hasTransport(NetworkCapabilities.TRANSPORT_VPN) ?: false
    }
  }
}
