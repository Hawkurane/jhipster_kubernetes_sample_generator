package com.jhipster.demo.crm.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link OrderItemSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class OrderItemSearchRepositoryMockConfiguration {

    @MockBean
    private OrderItemSearchRepository mockOrderItemSearchRepository;

}
