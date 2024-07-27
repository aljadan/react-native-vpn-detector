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
  @SuppressLint("MissingPermission")
  override fun definition() = ModuleDefinition {
    Name("VpnDetector")

    Function("isVpnActive") {
      val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
      val activeNetwork = connectivityManager.activeNetwork
      val networkCapabilities = connectivityManager.getNetworkCapabilities(activeNetwork)

      networkCapabilities?.hasTransport(NetworkCapabilities.TRANSPORT_VPN) ?: false
    }
  }
}
