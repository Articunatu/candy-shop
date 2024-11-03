interface ApiResponse<TEntity> {
    success: boolean;
    data: TEntity[];
}
