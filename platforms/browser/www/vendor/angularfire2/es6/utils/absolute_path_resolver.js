export function absolutePathResolver(rootUrl, providedPath) {
    return providedPath.indexOf('/') === 0 ? `${rootUrl}${providedPath}` : providedPath;
}
//# sourceMappingURL=absolute_path_resolver.js.map