import * as vscode from 'vscode';
import { Flow } from '@corekraft/flow-linter-core';

export class SaveFlow {
  public async execute(flow: Flow, defaultUri: vscode.Uri) {
    await this.writeFlow(flow, defaultUri);
    return defaultUri;
  }

  private async writeFlow(flow: Flow, pathToWrite: vscode.Uri) {
    await vscode.workspace.fs.writeFile(
      pathToWrite,
      Buffer.from(flow.toXMLString())
    );
    return true;
  }
}
