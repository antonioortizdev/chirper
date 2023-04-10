#!/bin/sh

set -e

echo "Starting custom MySQL entrypoint..."

# Call the original entrypoint script
echo "Running the original entrypoint script in the background..."
exec /usr/local/bin/docker-entrypoint.sh "$@" &

# Wait for the MySQL server to be ready
echo "Waiting for the MySQL server to be ready..."
mysql=( mysql --protocol=socket -uroot -p"${MYSQL_ROOT_PASSWORD}" )
for i in {30..0}; do
    if echo 'SELECT 1' | "${mysql[@]}" &> /dev/null; then
        break
    fi
    sleep 1
done
if [ "$i" = 0 ]; then
    echo >&2 'MySQL init process failed.'
    exit 1
fi

# Create the production database
echo "Creating the production database ${MYSQL_DATABASE} with charset utf8 and collation utf8_general_ci..."
echo "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE} CHARACTER SET utf8 COLLATE utf8_general_ci;" | "${mysql[@]}"

# Create the test database
echo "Creating the test database ${MYSQL_TEST_DATABASE} with charset utf8 and collation utf8_general_ci..."
echo "CREATE DATABASE IF NOT EXISTS ${MYSQL_TEST_DATABASE} CHARACTER SET utf8 COLLATE utf8_general_ci;" | "${mysql[@]}"

# Wait for the original entrypoint script to finish
echo "Waiting for the original entrypoint script to finish..."
wait

echo "Custom MySQL entrypoint finished."
