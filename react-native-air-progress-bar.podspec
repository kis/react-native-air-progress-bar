require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "react-native-air-progress-bar"
  s.version      = package['version']
  s.summary      = "React Native progress-bar, give your progress-bar some brand style."

  s.authors      = { "Kirill Stepkin" => "kirillstyopkin@gmail.com" }
  s.homepage     = "https://github.com/DylanVann/react-native-fast-image#readme"
  s.license      = "MIT"
  s.platform     = :ios, "9.0"

  s.source       = { :git => "https://github.com/kis/react-native-air-progress-bar" }

  s.dependency 'React'
end
