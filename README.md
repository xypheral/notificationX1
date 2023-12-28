iOS App launch errors 

`No permission handler detected. • Check that you are correctly calling setup permissions in your Podfile. • Uninstall this app, reinstall your Pods, delete your Xcode DerivedData folder and rebuild it.  `

Technically it doesnt affect the app at all just a warning, and each time the node_modules files need to comment out that line of code

Solution
XCode: Locate node_modules → react-native-permissiosn → RNPermissions.m

VSCode: Locate node_modules → react-native-permissions → ios → RNPermissionsModule.mm

Search “No permission handler detected”
→ Comment out `RCTLogError(@"%@", message);

