Find and fix problems on your salesforce flow on your IDE

## Installation

Visual Studio Code
```
code --install-extension corekraft.flow-linter-vsx
```

Cursor
```
cursor --install-extension corekraft.flow-linter-vsx
```

## Features/Commands

Use our side bar or the **Command Palette** and type `Flow` to see the list of all available commands.

Use the `Scan Flows` command by choosing either a directory or a selection of flows to run the analysis on.
*More information on the default rules can be found in the [core  documentation](https://github.com/Lightning-Flow-Scanner/lightning-flow-scanner-core).*

Use the `Configurate Flow Rules` command to configure the rules executed during scanning.

Use the `Fix Flows` command to apply available fixes automatically.  

The `Default Flow Rules` command can be used to view more details on the rules that are applied to Flows in the scans. 

The `Calculate Flow Coverage` command calculates Flow Test coverage percentages by running the apex tests in your default connectedOrg.

<!-- commands -->

| Command                                     | Title                                |
| ------------------------------------------- | ------------------------------------ |
| `flow-linter-vsx.viewDefaultFlowRules`      | Flow Linter: Default Flow Rules      |
| `flow-linter-vsx.scanFlows`                 | Flow Linter: Lint Flows              |
| `flow-linter-vsx.debugView`                 | Flow Linter: Debug Flow Scanner View |
| `flow-linter-vsx.fixFlows`                  | Flow Linter: Fix Flows               |
| `flow-linter-vsx.calculateFlowTestCoverage` | Flow Linter: Calculate Flow Coverage |
| `flow-linter-vsx.configRules`               | Flow Linter: Configure Flow Rules    |

<!-- commands -->

<!-- configs -->

| Key                            | Description                                                                       | Type      | Default                       |
| ------------------------------ | --------------------------------------------------------------------------------- | --------- | ----------------------------- |
| `flow-linter.SpecifyFiles`     | Specify flow file paths instead of a root directory.                              | `boolean` | `false`                       |
| `flow-linter.NamingConvention` | Specify a REGEX expression to use as Flow Naming convention.                      | `string`  | `"[A-Za-z0-9]+_[A-Za-z0-9]+"` |
| `flow-linter.APIVersion`       | Specify an expression to validate the API version, i.e. '===50'(use at least 50). | `string`  | `">50"`                       |
| `flow-linter.Reset`            | Reset all configurations on every scan                                            | `boolean` | `false`                       |

<!-- configs -->
