// @flow
import type {IObservableValue} from 'mobx/lib/mobx';

export type InternalLinkTypeOverlayProps = {|
    anchor: ?string,
    id: ?string | number,
    locale: ?IObservableValue<string>,
    onAnchorChange: (anchor: ?string) => void,
    onCancel: () => void,
    onConfirm: () => void,
    onResourceChange: (id: ?string | number, item: ?Object) => void,
    onTargetChange: (target: string) => void,
    onTitleChange: (title: ?string) => void,
    open: boolean,
    options: ?InternalLinkTypeOptions,
    target: ?string,
    title: ?string,
|};

export type InternalLinkTypeOptions = {|
    displayProperties: Array<string>,
    emptyText: string,
    icon: string,
    listAdapter: string,
    overlayTitle: string,
    resourceKey: string,
|};
